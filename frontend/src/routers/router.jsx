import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/login/Register';
import Cart from '../pages/books/CartPage';
import CheckoutPage from '../pages/books/CheckoutPage';
import SingleBook from '../pages/books/SingleBook';

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
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/dashboard', element: <h1>Dashboard</h1> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/books/:id', element: <SingleBook /> },
      { path: '*', element: <h1>404</h1> },
    ],
  },
]);
