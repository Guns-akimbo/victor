import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/Theme";
import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { useState,useRef } from "react";

const Header = ({ Logo }) => {

  const search =useRef()    
  const [isLoggedIn, setisLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [updateUI, setUpdateUI] = useState(false);
  const { theme, darkmode, lightmode, state, toggleMenu, showMenu } =
    useContext(ThemeContext);
  console.log("from headerstate", state);
  const headerStyle = {
    backgroundColor: theme === "light" ? " #2B4865" : "black",
    // color: theme === "light" ? "black" : "white"
  };
  // console.log(isLoggedIn.id)
  const logout = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ id: "", token: "", name: "" })
    );
    setUpdateUI(!updateUI);
  };


    const handleSearch =()=>{
         console.log(search.current.value)
    }

           


  return (
    <>
      <div className="bigheader">
        <div className="header" style={headerStyle}>
          <p>FREE WORLD-WIDE SHOPPING AS USUAL </p>
          {theme === "light" ? (
            <button onClick={() => darkmode()}>Darkmode</button>
          ) : (
            <button onClick={() => lightmode()}>Lightmode</button>
          )}
          {showMenu ? (
            <h2 onClick={() => toggleMenu()}>X </h2>
          ) : (
            <BiMenu
              className="menu"
              onClick={() => toggleMenu()}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
        <div className="header2">
          <div className="header2wrap">
            <div className="logowrap">
              <img src={Logo} alt="logo" />
              <p>
                {" "}
                Alo Market
              </p>
            </div>
            <div className="aboutwrap">
              <NavLink to="/home" style={{ textDecoration: "none" }}>
                <h3>Home</h3>
              </NavLink>
              <NavLink
                to="/features"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3>Features</h3>
              </NavLink>
              <NavLink
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3>About</h3>
              </NavLink>
              <NavLink
                to="/pricing"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3>Pricing </h3>
              </NavLink>
            </div>      
            <div className="buttonwrap">
              
                {isLoggedIn?.id !== "" && !updateUI ? (
                  <div
                    onClick={logout}
                    style={{ color: "black", cursor: "pointer" }}
                  >
                    Logout
                  </div>
                ) : (
                  <Link to="/loginpage">Login</Link>
                )}
                {isLoggedIn?.id === "" || updateUI === true ? (
                  <Link to="/signup">Signup</Link>
                ) : null}
              
              
              <div className="cartdivwrap">
                <Link
                  to="/shopcart"
                  style={{ textDecoration: "none", color: "black" }}
                  className="cartright"
                >
                  <h3>Cart({state.length})</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="categorydiv">
          <span className="categorywrap" >
            <input 
               ref={search}
              type="text"
              className="inputcategory"
              placeholder="Search products and categories"
            />
            <button className="search" onClick={handleSearch} > Search</button>
          </span>
        </div>
      </div>
    </>
  );
};




export default Header;
