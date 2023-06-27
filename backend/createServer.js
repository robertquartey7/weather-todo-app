import express from "express";
import passport from "passport";
import userRoutes from "./controllers/routes/userRoutes.js";
import todoRoutes from "./controllers/routes/todoRoutes.js";
import setupJWTStrategy from "./auth/index.js";
import cors from "cors";
import morgan from "morgan";
export const app = express();

app.use(express.json());
app.use(cors());
app.use("/", morgan("tiny"));

setupJWTStrategy(passport);

app.use("/auth", userRoutes);
app.use("/", todoRoutes);
