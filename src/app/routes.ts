import { Home, Details, Favorites } from './pages';

export const ROUTES = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/pokemon/:id',
    component: Details,
    name: 'Details'
  },
  {
    path: '/favorites',
    component: Favorites,
    name: 'Favorites'
  },
];
