import React, { useState} from 'react';

const SingleColorPicker = ({color, value, onChange}) => {

  const [newColor, setNewColor] = useState(0);

  const handleChange = (e) => {
    setNewColor(e.target.value)
    onChange(newColor)
  };

  //  const handleChange = (e) => {
  //  setNewColor(prev => {
  //     console.log("prev", prev)
  //     return {
  //       ...prev,
  //       [e.target.name]: e.target.value
  //     }
  //  })
  //    onChange(newColor)
  // }; QUESTION: PERQUÈ AQUÍ NO FUNCIONA AMB EL PREV?

  return (
    <section className="section-singlecolorpicker">
      <section className="rgb">
        <div className="div-color" style={{backgroundColor: color === "r" ? "red" : color === "g" ? "green" : "blue"}}></div>
        <label>{color.toUpperCase()}</label>
        <input type="number" value={value} onChange={handleChange} max="255" min="0"/>
      </section>
    </section>
    
  )
}

export default SingleColorPicker;