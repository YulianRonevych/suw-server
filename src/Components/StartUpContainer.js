import React from "react";
import { Link } from "react-router-dom";

export default function StartUpContainer(props){
    return(
        <Link to={`/startUpItem/${props.data.data[props.index].id}`} className="st-container">
        <div className="sc-firstrow">
        <h2>{props.data.data[props.index].name}</h2>
        <h6>Date of creation: {props.data.data[props.index].dateOfCreation.split('T')[0]}</h6>
        <h6>Raise amount: {props.data.data[props.index].raiseAmount}$</h6>
        </div>
        <hr className="brake"/>
        <div className="sc-descr">
        <p>
        {props.data.data[props.index].description.slice(0,250)}...
        </p>
        </div>
        <div className="sc-author">
        <span>🕒{props.data.data[props.index].raiseDate.split('T')[0]}  -  {props.data.data[props.index].endDate.split('T')[0]}</span>
        <span> Created by: {props.data.data[props.index].username}</span>
        </div>
        </Link>
    )
}