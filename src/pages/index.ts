export const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('./auth').then((m) => m.Login),
  },
]
