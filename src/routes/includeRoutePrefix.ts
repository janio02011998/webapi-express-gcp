import { IIncludeRoutesPrefix } from '~/interfaces/routes';

export function includeRoutePrefix({
  routes,
  prefixRoute,
}: IIncludeRoutesPrefix) {
  if (prefixRoute) {
    return routes.map(route => {
      const { path } = route;

      const pathWithPrefix = `${prefixRoute}${path}`;

      return { ...route, path: pathWithPrefix };
    });
  }

  return routes;
}
