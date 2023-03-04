import React, {useState} from 'react';

const ClickablePicture = ({img, imgClicked}) => {
  const [image, setImage] = useState(img);
  
  const handleChange = () => {
    image === "maxence.png" ? setImage(imgClicked): setImage(img)
  }

  return (
    <section className="section-like-button">
      <img src={image} alt="boy" onClick={handleChange} />
    </section>
  )
}

export default ClickablePicture;