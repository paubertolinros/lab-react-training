import React from 'react';
import { ratingStarsFunction } from './DriverCard';

const Rating = (prop) => {
  const { children } = prop;
  // let floorNumber = Math.round(children);
  // let starsToPaint = [];
  // for (let i = 0; i < 5; i++){
  //   i < floorNumber ? starsToPaint.push("★") : starsToPaint.push("☆");
  // };
  const starsToPaint = ratingStarsFunction(children);
  return (
    <section className="stars-section">
      <h3>{starsToPaint}</h3>
    </section>
  )
}

export default Rating;