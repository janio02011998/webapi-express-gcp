import * as HelpCity from '@app/actions/helpCity';

const prefixRoute = '/help-city';

const routes = [
  {
    method: 'GET',
    auth: 'basic',
    path: '/',
    description: 'get the hello world',
    ...HelpCity.create,
  },
];

export default {
  prefixRoute,
  routes,
};
