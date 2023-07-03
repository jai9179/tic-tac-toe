import React from "react";

const Square = (props) =>{
    return (
        <div 
            onClick ={props.onClick}
          style={{
            padding : "50px",
            border : "2px solid",
            height: "50px",
            width : "30%",
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
          }}
        className="square">
            <h5>{props.value}</h5>
         </div>
    );
   
};

export default Square;