import React from 'react'
import JsonData from '../../data/logements.json'
import { Link } from "react-router-dom";
function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(logement)=>{
			return(
				<Link className="clickable-card" to={"/product/" + logement.id}>
                	<figure>
                	<img src={logement.cover} alt="" className="card-img" />
					<figcaption>
					<h2 className="card-title">{logement.title}</h2>
					</figcaption>
                	
					</figure>
            	</Link>
			)
		}
	)

	return(
		<div className='card-container'>
			{DisplayData}
		</div>
	)
}

export default JsonDataDisplay;
