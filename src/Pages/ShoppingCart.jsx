import { useContext, useState } from "react"
import { ThemeContext } from "../Context/Theme"
import "./Shoppingcart.css"


const ShoppingCart = () => {

  const { theme, state,dispatch,total } = useContext(ThemeContext)
  console.log(state)

  const removeitem=(id)=>{
      dispatch({
        type: "deleted",
        id:id
      })
  }
 const increaseQty=(id)=>{
    dispatch({
      type: "increase",
      id:id
    })

}
  const decreaseQty=(id,quantity)=>{
    dispatch({
      type: "reduce",
      id:id,
      quantity
    })

}
  const totalitem=(quantity)=>{
    dispatch({
      type: "reduce",
    
    })

}

  
// console.log(total)

  return (
    <div className="Cart" style={{ backgroundColor: theme === "light" ? " #2B4865" : "black " }}>

      {
        state ?.map((props) => (

          <div key={props.id} className="cartwrap">
            <div className="leftcart">
              <h3>items in Cart:{props.quantity}</h3>
              <div className="cartbody">
                <div className="leftimage"> <img src={props.image } alt="" /> </div>
                <div className="bodydescription">
                  <p>Title: <br />{props.price}</p>
                </div>
                <p>Price: <br />{props.title}</p>
              </div>
              <div className="deletearea">
                <h3 onClick={()=> removeitem(props.id)}  style={{color:"red",fontSize:"25px"}}>Remove</h3>
                <div className="addedarea">
                  <h1 onClick={()=>decreaseQty(props.id,props.quantity)}>-</h1>
                   <h1>{props.quantity}</h1>
                  <h1 onClick={()=>increaseQty(props.id)}>+</h1>
                </div>
              </div>
            </div>
            <div className="rightcart">
              <h1>Cart Summary</h1>
              <div className="div" >
                <h2>Subtotal:</h2>
                <h4>price:{total}</h4>
              </div>
              <button>Checkout</button>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default ShoppingCart


