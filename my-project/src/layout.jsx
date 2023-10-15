import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { Outlet } from "react-router-dom";
function layout(){
 <>
 <Header/>
 <Outlet/>
 <Footer/>

  </>


}

export default layout