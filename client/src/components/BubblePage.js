import React, { useState, useEffect } from "react";
import fetchColors from "../api/fetchColors";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  
    const getData=()=>{
      //axiosWithAuth()
      //.get("/api/colors")
      fetchColors()
      .then((res)=>{
        console.log("colorsList",res);
        setColorList(res);
      //  console.log("setcolorlist",setColorList);
      //  console.log("updatecolor",colorList);
      })
      .catch((err)=>{
        console.log("error in bubblepage",err);
      });
     
    };
    useEffect(()=>{
      getData();
    },[]);
    
  return (
    <div className="flex-column">
    <h1>Colors</h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
