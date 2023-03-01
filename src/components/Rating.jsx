import React from 'react';

const Rating = (prop) => {
  const { children } = prop;

  const ratingStarsFunction = (ratingOrStars) => {
  let floorNumber = Math.round(ratingOrStars);
  let starsToPaint = [];
  for (let i = 0; i < 5; i++) {
    i < floorNumber ? starsToPaint.push("★") : starsToPaint.push("☆");
  };
  return starsToPaint;
  };
  
  const starsToPaint = ratingStarsFunction(children);
  return (
    <section className="stars-section">
      <h3>{starsToPaint}</h3>
    </section>
  )
}

export default Rating;