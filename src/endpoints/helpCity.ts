import * as HelpCity from '~/actions/helpCity';

const prefixRoute = '/help-city';

const routes = [
  {
    method: 'POST',
    auth: 'basic',
    path: '/',
    description: 'Create city',
    ...HelpCity.create,
  },
  {
    method: 'GET',
    auth: 'basic',
    path: '/download-pdf',
    description: 'get the hello world',
    ...HelpCity.downloadPDF,
  },
];

export default {
  prefixRoute,
  routes,
};
