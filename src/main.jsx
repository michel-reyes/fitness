import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from '@/routes/Root';
import { ErrorPage } from '@/routes/ErrorPage';
import { XeroDashboard } from '@/routes/xero';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/xero',
    element: <XeroDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/xero/beginner',
    element: <p>Xero2 for beginners</p>,
  },
  {
    path: '/xero/intermediate',
    element: <p>Xero2 for intermediate</p>,
  },
  {
    path: '/xero/advanced',
    element: <p>Xero2 for advanced</p>,
  },
  {
    path: '/hitt',
    element: <p>HIIT</p>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
