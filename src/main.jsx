import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Cursos from './Cursos.jsx'; 
import './index.css';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
  },
  {
    path: "/cursos", 
    element: <Cursos />, 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);