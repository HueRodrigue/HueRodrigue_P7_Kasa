import React, { Component }  from 'react';
import { useParams } from 'react-router';
import JsonData from '../../data/logements.json'
import Slider from '../../components/Slider/Slider.jsx'
import Collapsible from '../../components/Collapse/Collapse.jsx';



function Product() {
 /* Récupère la bonne fiche */
 const id = useParams();
 const Product = JsonData.find(logement => logement.id === id.id)
console.log(Product);

/* Équipements */
const equipementsProduct = Product?.equipments.map((equipment, index) => {
  return <li key={index}>{equipment}</li>
})

  return (
    <div className='product-page-container'>
      <div className='slider-container'>
        <Slider slides={Product.pictures}/>
      </div>
      <div className="about__dropdowns">
      <Collapsible title="Description" content={Product.description} />
      <Collapsible title="Equipements" content={equipementsProduct} />
      </div>
    </div>
  )
}

export default Product