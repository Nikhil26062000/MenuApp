import React from "react";
import Data from './Data';
import Card from "./Card";
import './index.css';


const Common =  (props) => {

    const ans = Data.filter((ele,ind)=>{
        return( ele.category ===props.cat )
     })

     console.log(ans);
    return(
        <>

        <div className="Box">
        {
            ans.map((ele,ind)=>{
                return <Card 
                imgsrc={ele.image}
                name = {ele.name}
                price = {ele.price}
                category = {ele.category}
                para = {ele.para}
                />
            })
        }

        </div>
        </>
    )
}

export default Common;