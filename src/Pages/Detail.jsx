import { useState, useEffect, useReducer, useContext } from "react"
import { useParams } from "react-router-dom"
import { ThemeContext } from "../Context/Theme"



const Detail = () => {

    const { theme,dispatch,state } = useContext(ThemeContext)
    // console.log("from detail", state)
    const [data, setData] = useState([])
    const { id} = useParams();

    const url = (`https://fakestoreapi.com/products/${id}`)

    const getallData = () => {
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res))
    }
    // console.log(data)
 
    useEffect(() => {
        getallData()
    }, [])

    
    function handleAddCart(id, price, title, image) {
        dispatch({
            type: "added",
            id: id,
            title: title,
            price: price,
            image: image,
        });
        alert("product addded sucessfully")
    }


    return (

        <div className="detailup" key={data.id} style={{ backgroundColor: theme === "light" ? " #2B4865" : "black " }} >

        <div className="detailwrap">
                <div className="detailimage">
                    <img src={data.image} alt="" /></div>
                <div className="detailtext">
                    <h3> ITEM NAME: <br /> {data.title}</h3>
                    <h5>PRICE:$ {data.price} </h5>
                    <h5>DESCRIPTION: <br /> {data.description}</h5>
                    <div className="detailcart">
                        <button className="Addtocart" onClick={()=>handleAddCart(data.id,data.title,data.price,data.image)} >Add to Cart</button>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Detail 














    //   const cartReducer=(state,action)=>{
    //       switch(action.type){
    //         case "Add_To_Cart":
    //             return{
    //                 ...state,
    //                 cartItems: [...state.cartItems, action.payload],
    //             };
    //             default:return state 
    //       }
    //   }
    //  const [state,dispatch] =useReducer(cartReducer,initialState)
    //    const cartData = state.cartItems.map((data)=>{console.log(data)})
    //   console.log("mr ebuka ",state.cartItems)
    //    const addToCart=(item)=>{
    //     dispatch({
    //         type: "Add To Cart",
    //         payload:item
    //     })
    //    }