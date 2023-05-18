import React, { useState, useEffect, useContext, Component } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const VehicleOverview = () =>{
    const {store, actions}= useContext(Context);
    const widget = "vehicles";
    function verifyFavorite(itemId){
        return store.favorites.some(item=>item.id==`${widget}/${itemId}`)
    }
    function imgError(e){
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }
  
    useEffect(()=>{
		actions.fetchStarWars(widget)
	}, [])

  return (
    <div className="container text-center">
        <h1 className="m-auto my-5">Vehicles</h1>
        <div className="row row-cols-4 mx-auto justify-content-center">
    {store[widget]?.map(item=>(
            <div key={item.uid} className="wholecard col card my-3 mx-3">
                <img src={item.img} onError={imgError} className="card-img-top mx-0 p-0 overflow-hidden" alt="CharacterImg"></img>
                <div className="cardTitle card-body">
                    <h5 className="cardTitle card-body"><strong>{item.name}</strong></h5>
                </div>
                <div className="cardFooter card-body ms-auto px-auto">
                    <Link to={`${item.uid}`}>
                        <button className="btn btn-outline-info mx-4">
                            Read More
                        </button>
                    </Link>
                    
                    <button 
                    className={`btn btn-${verifyFavorite(item.uid)?"warning":"outline-warning"}`} 
                    onClick={()=>actions.FavoriteChecked(`${widget}/${item.uid}`, item.name)}
                    >♡</button>
                </div>
            </div>    
    ))|| <h1>Patience you must have, my young Padawan.</h1>}
        </div>
    </div>
    )};

  export default VehicleOverview;