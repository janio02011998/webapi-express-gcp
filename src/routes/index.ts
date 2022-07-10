import express from 'express';
import helpCityRoutes from '@app/endpoints/helpCity';
import { basicAuth } from '@app/middlewares/auth';
import { includeRoutePrefix } from './includeRoutePrefix';

const router = express.Router();

export const routes = [...includeRoutePrefix(helpCityRoutes)];

for (const route of routes) {
  const { path, action, method, middlewares = [], auth } = route;

  if (auth === 'basic') {
    middlewares.unshift(basicAuth);
  }

  const methodLowerCase = method.toLowerCase() as
    | 'all'
    | 'get'
    | 'post'
    | 'put'
    | 'delete'
    | 'patch'
    | 'options'
    | 'head';

  router[methodLowerCase](path, ...middlewares, action);
}

router.get('*', (req, res, next) =>
  next({
    status: 404,
    message: 'RESOURCE_NOT_FOUND',
  }),
);

export default router;
