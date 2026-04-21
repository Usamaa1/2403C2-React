import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapNavbar from './BootstrapNavbar';
import { Outlet } from "react-router";



export const BootstrapLayout = () => {
  return (
    <div>
     <BootstrapNavbar></BootstrapNavbar>

     <Outlet />


     <footer>
      This is my Footer
     </footer>


    </div>
  )
}
