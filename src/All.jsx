import React from "react";
import Data from "./Data";
import Card from "./Card";

const All = () => {
    return(
        <>
            <div className="Box">
                {
                    Data.map((ele,index)=>{
                        return <Card 
                        key={index}
                        name={ele.name}
                        category={ele.category}
                        price={ele.price}
                        imgsrc={ele.image}
                        para={ele.para}

                        />
                    })
                }

            </div>
        </>
    )
}

export default All;