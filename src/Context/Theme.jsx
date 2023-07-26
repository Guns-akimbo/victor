import { useState, useReducer, useEffect } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);

let initalCart = JSON.parse(localStorage.getItem("cart")) || [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'added': {
            const check = state.findIndex((e) => e.id === action.id)
            if (check === -1) {
                return [
                    ...state,
                    {
                        id: action.id,
                        title: action.title,
                        price: action.price,
                        image: action.image,
                        quantity: 1
                    },
                ];
            } else {
                return state.map((e) => {
                    if (e.id === action.id) {
                        e.quantity += 1
                        return e
                    } else {
                        return e
                    }
                })
            }
        }
        case "increase": {
            return state.map((e) => {
                if (e.id === action.id) {
                    e.quantity += 1
                    return e
                } else {
                    return e
                }
            })
        } case "reduce": {
            if (action.quantity === 1) {
                return state.filter((t) => t.id !== action.id);
            } else {
                return state.map((e) => {
                    if (e.id === action.id) {
                        e.quantity -= 1
                        return e
                    } else {
                        return e
                    }
                })
            }

        }
        case "deleted": {
            return state.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error("Unknown action:" + action.type);
        }
    }
}


const Theme = ({ children }) => {
    const  [watch,setWatch]=useState(JSON.parse(localStorage.getItem("user")))
    const [state, dispatch] = useReducer(reducer, initalCart)
    const [theme, setTheme] = useState("light")
    const [total, setTotal] = useState(0)
    const [showMenu, setshowMenu] = useState(false)
    console.log(state)


    const toggleMenu = () => {
        setshowMenu(!showMenu)
    }


    const darkmode = () => {
        setTheme("dark")
    }
    const lightmode = () => {
        setTheme("light")
    }

    useEffect(() => {
        const val = state.reduce((p, e) => (p + (e.price * e.quantity)), 0)
        //  setTotal(val.toFixed(2))
        localStorage.setItem("cart", JSON.stringify(state))
    }, [state])

    useEffect(() => {
    //    setisLoggedIn(JSON.parse(localStorage.getItem("user")))
    },)


    return (
        <ThemeContext.Provider value={{ theme, darkmode, lightmode, state, dispatch, total, showMenu, toggleMenu,watch,setWatch}} >
            {children}
        </ThemeContext.Provider>
    )
}

export default Theme

