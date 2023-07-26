import { Outlet } from "react-router-dom";
import Header from "../Components/Header"
// import Logo from "../assets/Logo.jpg "
// import Logo from "./assets/Logo.jpg"
import Logo from "../assets/Logo.jpg"

export const Layout=()=>{
   return(
    <div style={{width:"100%"}}>
         <Header Logo={Logo}/>
        <Outlet/>      
    </div>
   )
}