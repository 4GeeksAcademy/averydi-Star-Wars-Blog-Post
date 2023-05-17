import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 sticky-top">
			<Link to="/">
			<div className="logo">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/100px-Star_Wars_Logo.svg.png"></img>
			</div>
			</Link>
			<div className="dropstart btn-group ml-auto pe-5">
				<button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					<strong>Favorites</strong>
				</button>
				<ul className="dropdown-menu">
					{store.favorites.map((favorite, index)=>{
						return(
							<div className="d-flex flex-row" key={index}>
								<li key={index}><a className="dropdown-item d-flex flex-row overflow-hidden"  href="#">{favorite.itemName}</a></li>
								<button onClick={()=>{actions.deleteFavorite(favorite.itemName)}} type="button" className="badge rounded-pill bg-info mx-auto">X</button>
							</div>
						)
					})||<p>How about adding favorites?</p>}
					<li><a className="dropdown-item" onClick={()=>{actions.deleteAllFavorites()}}>Clear All</a></li>
				</ul>
				</div>
		</nav>
	);
};
