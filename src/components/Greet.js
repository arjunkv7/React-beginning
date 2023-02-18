import React from "react";

function Greet(props) {
   // return <h1>Hellow World</h1>
   
   return React.createElement("div",null,React.createElement("h1",null,props.name))
}

export default Greet