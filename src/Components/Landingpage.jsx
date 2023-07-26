import { useEffect, useState, useContext } from "react"
import Slider from "./Slider"
import { Link } from "react-router-dom"
import { ThemeContext } from "../Context/Theme"


const Landingpage = ({ }) => {


    const { theme, state,dispatch} = useContext(ThemeContext)

    // console.log("from landingpage",state)

    const [data, Setdata] = useState([])
    const [pop, setPop] = useState(false)
    const [getoneData, setoneData] = useState()

    // console.log(getoneData) 

    console.log(data)

    const url = "https://fakestoreapi.com/products"

    const getApiData = () => {
        fetch(url)
            .then(res => res.json())
            .then(res => Setdata(res))

    }

    // const getApiDataByid = (id) => {
    //     const url = `https://fakestoreapi.com/products/${id}`
    //     // console.log(url)
    //     fetch(url)
    //         .then(res => console.log(res.json()))
    //         // .then(res => console.log(res))
            
    // }

    const showProductwithid = (id) => {
        setPop(true)
        // console.log(id)
        // getApiDataByid(id)

    }


    useEffect(() => {
        getApiData()
        showProductwithid()
        setPop()
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



    // const [{theme,isDark,}, toggleTheme] = useContext(ThemeContext)

    return (
        <>

            <Slider />
            <div className="bodypart" style={{ backgroundColor: theme === "light" ? " #2B4865" : "black " }} >
                <div className="bodypartwrap">

                    {
                        data.length <= 0 ? <> <div className="loading"> loading......... </div>

                        </> :
                            <>
                                {
                                    data.map((props) => (
                                        <div  key={props.id} className="card">
                                            <img className="cardimage" src={props.image} alt="" />
                                            <div className="cardtext">
                                                <h3>{props.title}</h3>
                                                <h3 > PRICE: {props.price}</h3>
                                                 <Link to={`/detail/${props.id}`}>detail</Link>
                                                  <button  style={{width:"80px", height:'40PX',fontSize:"15px", cursor:"pointer"}} onClick={()=>handleAddCart(props.id,props.title,props.price,props.image)}>Add to Cart</button>
                                                {/* <h4>{props.description}</h4> */}
                                                {/* <button className="ViewBtn" onClick={() => showProductwithid(props.id)}> View</button> */}

                                            </div>
                                        </div>
                                    ))}
                            </>
                   }
                </div>
            </div>



            {
                pop ? <>
                    <div className="popup">
                        <div className="popwrap">
                            <div className="popimage">
                                <img src={getoneData?.image} alt="" />
                            </div>
                            <div className="poptext">
                                <span className="deleteBtn">
                                    <p onClick={() => setPop(false)}>X</p>
                                </span>
                                <h3> ITEM NAME:{getoneData?.title}</h3>
                                <h5>PRICE: {getoneData?.price}</h5>
                                <h5>DESCRIPTION:{getoneData?.description}</h5>
                                <div className="popupBtn">
                                    <button className="Addtocart">Add to Cart</button>
                                    <button className="Viewcart">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : null

            }


        </>
    )
}
export default Landingpage

