import express from 'express';
import helpCityRoutes from '@app/endpoints/helpCity';
import { includeRoutePrefix } from './includeRoutePrefix';

const router = express.Router();

export const routes = [...includeRoutePrefix(helpCityRoutes)];

for (const route of routes) {
  const { path, action, method, middleware = [] } = route;

  const methodLowerCase = method.toLowerCase();

  (router as any)[methodLowerCase](path, ...middleware, action);
}

router.get('*', (req, res, next) =>
  next({
    status: 404,
    message: 'RESOURCE_NOT_FOUND',
  }),
);

export default router;
