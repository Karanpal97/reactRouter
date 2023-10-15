import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Home from './components/Home/Home';
import About from './components/About/About';

const router=createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
  },{
    path:"About",
    element:<About/>
  }
  ]
}])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  
  </React.StrictMode>
);

