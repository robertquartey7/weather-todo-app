import express from "express";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import passport from "passport";
import { prisma } from "../../db/index.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// sign up routes

router.post("/signup", async (req, res) => {
  try {
    const foundUser = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });
    if (foundUser) {
      res.status(401).json({
        success: false,
        message: "User already exist",
      });
    } else {
      // hashing password
      try {
        const hashPassword = await argon2.hash(req.body.password);
        const newUser = await prisma.user.create({
          data: {
            ...req.body,
            password: hashPassword,
          },
        });

        if (newUser) {
          res.status(201).json({
            success: true,
            message: "User successfully created",
          });
        } else {
          res.status(500).json({
            success: false,
            message: "User was not created. Something happened",
          });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "User was not created. Something happened",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

// login routes

router.post("/login", async (req, res) => {
  try {
    console.log(req.body)
    const foundUser = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });

    if (foundUser) {
      try {
        const verifyPassword = await argon2.verify(
          foundUser.password,
          req.body.password
        );

        if (verifyPassword === true) {
          const token = jwt.sign(
            {
              id: foundUser.id,
              fullName: foundUser.fullName,
              email: foundUser.email,
            },

            process.env.SECRET_KEY
          );

          res.status(200).json({
            success: true,
            token,
          });
        } else {
          res.status(401).json({
            success: false,
            message: "wrong username or password",
          });
        }
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "something went wrong",
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});

// get current user
router.get(
  "/",
  passport.authenticate("jwt", {
    session: false,
  }),
  async (req, res) => {
    try {
      const currentUser = req.user;

      if (currentUser) {
    
        res.status(200).json({
          success: true,
          data: currentUser,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "user not found",
        });
      }
    } catch (error) {
   
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }
  }
);

router.get('/delete',async(req, res)=>{
  const deleteUser = await prisma.user.deleteMany({})

  res.status(200).json({
    success: true,
    data: deleteUser
  });

})
// deleting a user
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });

    if (deletedUser) {
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});

// user update route
router.put("/:id", async (req, res) => {
  try {
    const updateUser = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        ...req.body,
      },
    });
    if (updateUser) {
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});

export default router;
