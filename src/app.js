import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import tasksRoutes from "./routes/samples.routes.js";
import samplesOkRoutes from "./routes/sampleOk.routes.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin:['https://0vssxkr7-5173.usw3.devtunnels.ms','http://localhost:5173','http://localhost:4173','https://geo-tasks-mu.vercel.app','https://geo-tasks-luisillo77ds-projects.vercel.app'],
    credentials:true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", tasksRoutes);
app.use("/api", samplesOkRoutes);

export default app;
