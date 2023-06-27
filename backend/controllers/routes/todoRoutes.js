import { prisma } from "../../db/index.js";
import express from "express";
import passport from "passport";

const router = express.Router();
const passportOptions = {
  session: false,
};

// get all list
router.get(
  "/list",
  passport.authenticate("jwt", passportOptions),
  async (req, res) => {
    try {
      const allList = await prisma.list.findMany({
        where: {
          userId: req.user.id,
        },
        include: {
          _count: true,
          todos: true,
        },
      });
      if (allList) {
        res.status(200).json({
          success: true,
          data: allList,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }
);

// update list

// get all todos from a specfic list
router.get(
  "/list/:id/task",
  passport.authenticate("jwt", passportOptions),
  async (req, res) => {
    try {
      const todos = await prisma.list.findMany({
        where: {
          userId: req.user.id,
          id: req.params.id,
        },
        include: {
          todos: true,
          _count: true,
        },
      });
      if (todos) {
        res.status(200).json({
          success: true,
          data: todos,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }
);

router.get(
  "list/:listId/task/:taskId",
  passport.authenticate("jwt", passportOptions),
  async (req, res) => {
    try {
      const getOneTodo = await prisma.todos.findFirst({
        where: {
          id: req.params.taskId,
          listId: req.params.listId,
        },
      });

      if (getOneTodo) {
        res.status(200).json({
          success: true,
          data: getOneTodo,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Not Found",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// create a list
router.post(
  "/list",
  passport.authenticate("jwt", passportOptions),
  async (req, res) => {
    try {
      const newList = await prisma.list.create({
        data: {
          title: req.body.title,
          userId: req.user.id,
        },
      });
      if (newList) {
        res.status(201).json({
          success: true,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }
  }
);

// create task
router.post(
  "/list/task/:taskId",
  passport.authenticate("jwt", passportOptions),
  async (req, res) => {
    try {
      const date = new Date(req.body.datetime);

      console.log(req.body);

      const newTask = await prisma.todos.create({
        data: {
          title: req.body.title,
          description: req.body.description,
          completed: false,
          dueDate: date,
          userId: req.user.id,
          listId: req.params.taskId,
        },
      });
      if (newTask) {
        res.status(201).json({
          success: true,
          data: newTask,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }
  }
);

export default router;
