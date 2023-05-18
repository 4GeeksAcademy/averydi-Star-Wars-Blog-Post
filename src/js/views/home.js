import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { VehicleCard } from "../component/VehicleCard";
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext(Context)

	useEffect(()=>{
		actions.fetchStarWars("vehicles")
		actions.fetchStarWars("people")
		actions.fetchStarWars("planets")
	}, [])
	return(
	<>
		<Link to="/people/">
			<h1>
				Characters
			</h1>
		</Link>
		<div className="container-fluid overflow-scroll">
			<CharacterCard 
			widget="people"
			/>
		</div>
		<Link to="/planets/">
			<h1>
				Planets
			</h1>
		</Link>
		<div className="container-fluid overflow-scroll my-3">
			<PlanetCard 
			widget="planets"
			/>
		</div>
		<Link to="/vehicles/">
			<h1>
				Vehicles
			</h1>
		</Link>
		<div className="container-fluid overflow-scroll my-3">
			<VehicleCard 
			widget="vehicles"
			/>
		</div>
	</>
);}

