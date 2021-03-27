import React, { Component, useState } from "react";
 
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";
 
const Transliterate = (props) => {
//   const [text, setText] = useState("");

  const setText = (event)=>{
      props.onChange(event);

  }
 
  return (
    <div className="container" >
      {/* <h2>React transliterate</h2> */}
      <ReactTransliterate
    //   containerStyles = {{"col-lg-12" :"col-lg-12"}}
        // value={text}
        onChange={(e) => setText(e)}
        lang="mr"
        name={props.name }
        value={props.value }
        className={props.className}
        // type={props.type || "text"}
      />
    </div>
  );
};
 


export default Transliterate;