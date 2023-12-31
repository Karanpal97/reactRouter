import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/contact/contact';
import User from './components/User/User';
import Github ,{GithubLoader} from './components/Github/Github';


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
  },{
    path:"Contact",
    element:<Contact/>
  },
  {
    path:"Github",
    element:<Github/>,
    loader:GithubLoader,
    },
     { 
    path:"/user/:userId",
     element:<User/>
    },

    
  ],

}])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  
  </React.StrictMode>
);


