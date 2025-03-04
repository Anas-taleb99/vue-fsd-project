export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('./auth').then((m) => m.Login),
  },
  {
    path: '/',
    name: 'dashboard',
    component: () => import('./dashboard/DashboardLayout.vue'),
    children: [
      {
        path: 'banks',
        name: 'bank',
        component: () => import('./dashboard/Bank/BankView.vue'),
      },
      {
        path: 'banks/create',
        name: 'bank-create',
        component: () => import('./dashboard/Bank/Create/CreateBank.vue'),
      },
    ],
  },
]
