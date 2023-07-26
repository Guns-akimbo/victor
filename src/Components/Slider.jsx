import { useEffect, useState } from "react"
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { ThemeContext } from "../Context/Theme"
import { useContext } from "react"





const Slider = () => {

    const {theme} =useContext(ThemeContext)
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    const Newdata = data.slice(1,6)

    const addSlider = () => {
        setCount(count + 1)
    } 

    const subSlider = () => {
        if (count <= 0) {
            setCount(0)

        } else {
            setCount(count - 1)
        }
    }


    const url = "https://fakestoreapi.com/products"

    const fetchAllData = () => {
         fetch(url)
      .then(res=> res.json())
        .then(res => setData(res))
    }

//   console.log(data)
  
   

    useEffect(() => {
        fetchAllData()

    }, [])

    useEffect(()=>{
      setInterval(()=>{
        setCount(count=> count+=1)
      },5000)
      
    },[]) 



    

    return (


        <div className="slider" style={{backgroundColor: theme === "light" ? " #2B4865" :"black "}} >
            <div className="sliderwrap">
                <div className="sliderleft">
                     <div className="slidetext">
                     <h3>Name of item: <br /> {Newdata[count%Newdata.length]?.title}</h3>
                    <h3>Description: <br />  {Newdata[count%Newdata.length]?.description}</h3>
                     </div>
                    
                    <button className="shopnow" >Shop Now</button>
                    </div>
                       
                <div className="sliderright">
                    <img src={Newdata[count%Newdata.length]?.image} alt="" />
                </div>
          
                <div className="iconslide">
                    <BsFillArrowLeftCircleFill className="leftarrow" onClick={subSlider} />
                    <BsFillArrowRightCircleFill className="rightarrow" onClick={addSlider} />
                </div>
               
            </div>

        </div>

    )
}

export default Slider 