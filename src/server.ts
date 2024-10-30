import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import { createServer } from "http";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger-output.json"; // 경로를 맞춰주세요.

import testRoute from "./routes/test";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/test", testRoute);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, { explorer: true })
);

const httpServer = createServer(app);

const startServer = async () => {
  httpServer.listen(port, () => {
    console.log(`서버 시작`);
  });
};

startServer();
