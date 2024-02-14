import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import tasksRoutes from "./routes/samples.routes.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin:['https://0vssxkr7-5173.usw3.devtunnels.ms','http://localhost:5173'],
    credentials:true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", tasksRoutes);

export default app;
