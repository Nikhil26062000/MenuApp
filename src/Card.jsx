import React from "react";

const Card = (props) =>{
    return(
        <>
            <div className="card">
                <div className="left">
                    <img src={props.imgsrc} alt="Random" />
                </div>
                <div className="right">
                    <h3>{props.name}</h3>
                    <h4>{props.category}</h4>
                    <h5>{props.price}</h5>
                    <h6>{props.para}</h6>
                </div>

            </div>
        </>
    )
}

export default Card;