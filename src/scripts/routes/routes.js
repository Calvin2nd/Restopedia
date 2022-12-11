import MainPage from '../views/pages/main-page';
import Favorites from '../views/pages/favorites';
import Detail from '../views/pages/detail';

const routes = {
  '/': MainPage, // default page
  '/main-page': MainPage,
  '/favorites': Favorites,
  '/detail/:id': Detail,
};

export default routes;
