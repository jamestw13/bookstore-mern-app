import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/login/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/orders', element: <h1>Orders</h1> },
      { path: '/about', element: <h1>About</h1> },
      { path: '/contact', element: <h1>Contact</h1> },
      { path: '/cart', element: <h1>Cart</h1> },
      { path: '/checkout', element: <h1>Checkout</h1> },
      { path: '/dashboard', element: <h1>Dashboard</h1> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
]);
