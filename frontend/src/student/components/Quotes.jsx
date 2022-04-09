import React, { useEffect, useState } from "react";
import axios from "axios"
function Quotes() {
    const [quotes,setQuotes]=useState({})
    useEffect(async()=>{
        const data=await axios.get("https://programming-quotes-api.herokuapp.com/Quotes/random")
        setQuotes(data.data)
    },[])
  return (
    <div
      className=""
      style={{
        minHeight: "30%",
        width: "95%",
        boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
        backgroundColor:"rgb(0 0 0 / 85%)",
        borderRadius:"8px",
        border:"3px solid green",
        display:"grid",
        gridTemplateRows:"1fr 20%"
      }}
    >

     <div className="containt" style={{textAlign:"center",padding:"2%"}}>
         <p style={{color:"yellow"}}>{quotes.en}</p>

     </div>
     <div className="authorContainer" style={{display:"flex",alignItems:"center",justifyContent:"right",padding:"3%"}}>
         <b style={{color:"white"}}>~{quotes.author}</b>

     </div>
    </div>
  );
}

export default Quotes;
