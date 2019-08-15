const routes = [
  {
    path: '/',
    redirect: '/section/1',
    /* component: () => import('layouts/PhoneLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ], */
  },
  {
    path: '/section',
    component: () => import('layouts/PhoneLayout.vue'),
    children: [
      { path: ':sectionID', component: () => import('pages/Section.vue') },
      { path: ':sectionID/:scene', component: () => import('pages/Section.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
