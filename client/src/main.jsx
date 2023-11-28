import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Cart from './pages/cart';
import AddListing from './pages/addListing';
import EditListing from './pages/editListing';
import ProductPage from './pages/productpage';
import Dashboard from './pages/dashboard';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/cart',
        element: <Cart />
      }, {
        path: '/addListing',
        element: <AddListing />
      }, {
        path: '/editListing',
        element: <EditListing />
      }, {
        path: '/productpage',
        element: <ProductPage />
      }, {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
