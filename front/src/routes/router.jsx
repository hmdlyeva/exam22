import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../pages/home/Home'
import MenuPage from '../components/routesPages/MenuPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/menu",
    element: <MenuPage />
  },


]);

export default router