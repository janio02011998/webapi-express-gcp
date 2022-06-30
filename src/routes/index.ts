import express from "express";
import { includeRoutePrefix } from "./includeRoutePrefix";

import helpCityRoutes from "~/endpoints/helpCity";

const router = express.Router();

export const routes = [...includeRoutePrefix(helpCityRoutes)];

for (const route of routes) {
  const { path, action, method, middleware } = route;

  const methodLowerCase = method.toLowerCase();

  (router as any)[methodLowerCase](path, action, middleware);
}

router.get("*", (req, res, next) =>
  next({
    status: 404,
    message: "RESOURCE_NOT_FOUND",
  })
);

export default router;
