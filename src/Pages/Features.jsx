import "../Mediaqueries/Mediaqueries.css"

const Features =()=>{
    return(
      <div className="features" >
          <div style={{width:"80%",backgroundColor:"white", height: "20vh"}}> <h1>header</h1></div>
          <div style={{width:"80%",backgroundColor:"green", height: "60vh"}}> <h1>body</h1> </div>
          <div style={{width:"80%",backgroundColor:"black", height: "20vh",color:"whitesmoke"}}> <h1>foooter</h1></div>
          {/* <div>header</div> */}
      </div>
    )
}

export default Features