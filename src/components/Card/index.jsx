import React from 'react'
import JsonData from '../../data/logements.json'
function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(logement)=>{
			return(
                <a href='#' className='clickable-card' key={logement.id} id= {logement.id}>
                    <article className='logement-card'>
                        <figure>
                            <img src={logement.pictures[0]} alt={logement.title}/>
                            <figcaption>
                                <h2>{logement.title}</h2>
                            </figcaption>
                        </figure>
                    </article>
                </a>
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
