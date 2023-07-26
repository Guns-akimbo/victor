import { NavLink } from "react-router-dom";

export const Menuitems = () => {
    return (
        <div className="menuitems">
            <div className="menuContents">
                <NavLink to="/home" style={{ textDecoration: "none", }}>
                    <h3>Home</h3>
                </NavLink>
                <NavLink to="/features" style={{ textDecoration: "none", color: "black" }}>
                    <h3>Features</h3>
                </NavLink>
                <NavLink to="/about" style={{ textDecoration: "none", color: "black" }}>
                    <h3>About</h3>
                </NavLink>
                <NavLink to="/pricing" style={{ textDecoration: "none", color: "black" }}>
                    <h3>Pricing </h3>
                </NavLink>
                <NavLink to="/resources" style={{ textDecoration: "none", color: "black" }}>
                    <h3>Resources</h3>
                </NavLink>
            </div>
        </div>
    )
}