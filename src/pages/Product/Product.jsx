import React, { Component }  from 'react';
import { useParams } from 'react-router';
import JsonData from '../../data/logements.json'
import Slider from '../../components/Slider/Slider.jsx'
import Host from '../../components/Host/Host.jsx'
import Title from '../../components/Title/Title.jsx'
import Rating from '../../components/Rating/Rating.jsx'
import Tags from '../../components/Tags/Tags.jsx'
import Collapsible from '../../components/Collapse/Collapse.jsx';
import Error from '../../pages/Error/Error.jsx'



function Product() {
 /* Récupèration de l'id via l'url */
 const id = useParams();
 // Stockage de l'id dans la constante product
 const Product = JsonData.find(logement => logement.id === id.id)
console.log(Product);

// Si aucun produit n'a été trouvé, on renvoie la page erreur
if(typeof Product === 'undefined') {
  return(
  <Error/>
  )
}

/* Mappage des équipements sous forme de liste  */
let equipementsProduct = Product?.equipments.map((equipment, index) => {
  return <li key={index}>{equipment}</li>
})

// Mappage des Tags sous formes de liste
const tagsProduct = Product?.tags.map((tags, index) => {
  return <li className='tags-item' key={index}>{tags}</li>
})

// Séparation du nom et du prénom de l'host
 const split_string = Product.host.name.split(" ");

  return (
    <div className='product-page-container'>
      <div className='slider-container'>
        <Slider slides={Product.pictures}/>
      </div>
      <div className='Info-container'>
      <div className='title_tags_container'>
        <Title title={Product.title} city = {Product.location}/>
        <Tags content = {tagsProduct} />
      </div>
      
      <div className='profile_rate_container'>
        <Host name = {split_string[0]} username = {split_string[1]} picture = {Product.host.picture}/>
        <Rating rating = {parseInt(Product.rating)}/>
      </div>
      </div>
      <div className="product__dropdowns">
        <Collapsible title="Description" content={Product.description} />
        <Collapsible title="Equipements" content={equipementsProduct} />
      </div>
    </div>
  )
}

export default Product