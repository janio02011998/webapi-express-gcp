import http from "http";
import express, { Express } from "express";
import cors from "cors";
import router from "@app/routes";

const api: Express = express();

api.use(cors());
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use((req, res, next) => {
  next();
});

api.use(router);

const httpServer = http.createServer(api);
httpServer.listen(8080, () =>
  console.log(`The server is running on port 8080`)
);

export default api;
