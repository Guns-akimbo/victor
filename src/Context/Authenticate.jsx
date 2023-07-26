import { useContext } from "react";
import { ThemeContext } from "./Theme";
import { Outlet,Navigate,useLocation } from "react-router-dom";

const Authenticate=()=>{
   const location =useLocation()
   const {watch}=useContext(ThemeContext)
   return (
    <>
  
    {
        watch?.id  !== ""? <Outlet/> : <Navigate to="/loginpage" state={{from:location}} replace />
    }
      </>
   )

}

export default Authenticate