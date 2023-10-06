import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mainlaout from './Mainlaout';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import Provider from './Component/Provider/Provider';
import Newsdetail from './Component/Newsdetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlaout></Mainlaout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('../public/data/news.json')
        
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/newsdetail',
        element:<Newsdetail></Newsdetail>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
