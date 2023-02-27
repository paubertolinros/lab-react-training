import React from 'react';

export const ratingStarsFunction = (ratingOrStars) => {
  let floorNumber = Math.round(ratingOrStars);
  let starsToPaint = [];
  for (let i = 0; i < 5; i++) {
    i < floorNumber ? starsToPaint.push("★") : starsToPaint.push("☆");
  };
  return starsToPaint;
};

const DriverCard = (prop) => {
  const { name, rating, img, car:{model, licensePlate} } = prop;
  const ratingToPaint = ratingStarsFunction(rating);
  return (
    <section className="driver-card-section">
      <div className="image-driver">
        <img src={img} alt={name}/>
      </div>
      <div className="name-rating-driver">
        <h2>{name}</h2>
        <h2 className="h2-driver">{ratingToPaint}</h2>
        <p>{model} - {licensePlate}</p>
      </div>
  
    </section>
  )
}

export default DriverCard;