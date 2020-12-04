import { lazy } from 'react';

const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() =>
      import('./components/Authentification/Authentification'),
    ),
  },
  {
    exact: false,
    path: '/login',
    component: lazy(() => import('./components/Loginization/Loginization')),
  },
  {
    exact: false,
    path: '/registr',
    component: lazy(() => import('./components/Registration/Registration')),
  },
  {
    exact: true,
    path: '/profile',
    component: lazy(() => import('./components/Profile/Profile')),
  },
  // {
  //   exact: true,
  //   path: '/profile/habit-list/:habitId',
  //   component: lazy(() =>
  //     import('./components/HabitsList/HabitProfile/HabitProfile'),
  //   ),
  // },
];

export default routes;
