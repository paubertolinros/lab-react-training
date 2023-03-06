import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker'

const RGBColorPicker = () => {
  const [rValue, setrValue] = useState(0);
  const [gValue, setgValue] = useState(0);
  const [bValue, setbValue] = useState(0);

  const handleChangeColorR = (colorValue) => {
    setrValue(colorValue)
  };
  const handleChangeColorG = (colorValue) => {
    setgValue(colorValue)
  };
  const handleChangeColorB = (colorValue) => {
    setbValue(colorValue)
  };

  return (
    <section className="section-colorpicker">
      <SingleColorPicker 
        color="r"
        value={rValue}
        onChange={handleChangeColorR}
      />

      <SingleColorPicker 
        color="g"
        value={gValue}
        onChange={handleChangeColorG}
      />

      <SingleColorPicker 
        color="b"
        value={bValue}
        onChange={handleChangeColorB}
      />
      <section className="rgb">
      <div className="div-color" style={{backgroundColor:`rgba(${rValue}, ${gValue}, ${bValue})`}}></div>
      </section>
    </section>
    
  )
}

export default RGBColorPicker;