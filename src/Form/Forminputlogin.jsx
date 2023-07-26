import { useState } from "react"
import "./Forminput.css"


const Forminputlogin=(props)=>{
  
    const {label,id ,errorMessage,onChange,... inputProps}=props
    const [focused,setFocused]=useState(false)
   
    const handleFocus=()=>{
        setFocused(true)  
    }


    return( 

        <div className="forminput">
            <label className="label">{label}</label>
            <input
            {...inputProps}
            onChange={onChange}
            className="input"  
            onBlur={handleFocus}
            onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)}
             focused={focused.toString()}/>
            <span className="error-el">{errorMessage}</span>

        </div>
    )
}

export default Forminputlogin