import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './routes/home';

import Transaction from './routes/transaction';
import TransactionDetails from './components/transaction/details';

import './index.css';
import Balance from './routes/balance';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:number',
        element: <Home />
      },
      {
        path: '/balance/',
        element: <Balance />
      },
      {
        path: '/transaction/:hash',
        element: <Transaction />
      },
      {
        path: '/transaction/detail/:hash',
        element: <TransactionDetails />
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
