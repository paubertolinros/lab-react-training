import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [indexImg, setIndexImg] = useState(0);
  const [image, setImage] = useState(images[indexImg]);
  
  useEffect(() => {
    setImage(images[indexImg])
  }, [indexImg])
  
  const handleLeButton = () => {
    if (indexImg > 0) {
      setIndexImg(prev => prev - 1)
    }
  };

  const handleRiButton = () => {
    if (indexImg < images.length - 1) {
      setIndexImg(prev => prev + 1)
    }
  };

  return (
    <section className="section-carousel">
      <button onClick={handleLeButton}>◀︎</button>
      <img className="carousel-image" src={image}  alt="people" />
      <button onClick={handleRiButton}>▶︎</button>
    </section>
  )
}

export default Carousel;