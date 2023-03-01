import React from 'react';
import Rating from './Rating'

const DriverCard = (prop) => {
  const { name, rating, img, car:{model, licensePlate} } = prop;
  return (
    <section className="driver-card-section">
      <div className="image-driver">
        <img src={img} alt={name}/>
      </div>
      <div className="name-rating-driver">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{model} - {licensePlate}</p>
      </div>
  
    </section>
  )
}

export default DriverCard;