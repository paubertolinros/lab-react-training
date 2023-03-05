import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const randomNum = Math.floor(Math.random() * 4);
  const [indexImg, setIndexImg] = useState(randomNum);
  const [image, setImage] = useState(images[indexImg]);
  
  useEffect(() => {
    setImage(images[indexImg])
  }, [images, indexImg])
  //QUESTION: Aquest useEffect em donava error, he anat provant
  // i al dinal ha desaparegut, però no entenc què
  //estava fent malament i perquè necessito "images", és perquè
  //cada vegada que s'actualitzi indexImg també ho ha de fer 
  //images?
  const handleLeButton = () => {
    if (indexImg > 0) {
      setIndexImg(prev => prev - 1)
    } else {
      setIndexImg(images.length - 1)
    }
  };

  const handleRiButton = () => {
    if (indexImg < images.length - 1) {
      setIndexImg(prev => prev + 1)
    } else {
      setIndexImg(0)
    }
  };

  return (
    <section className="section-carousel">
      <button onClick={handleLeButton}>◀︎</button>
      <img className="carousel-image" src={image} alt="people" />
      <button onClick={handleRiButton}>▶︎</button>
    </section>
  )
}

export default Carousel;