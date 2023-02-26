import React from 'react';

const BoxColor = (colorProps) => {
  const { r, g, b } = colorProps;
  
  const colorToHex = (color) => {
    const hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
  };
  
  const RGBtoHex = (r, g, b) => {
    return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
  };
    
  const styleSection = {
    backgroundColor: `rgb(${r},${g},${b})`
  };
  const hex = RGBtoHex(r, g, b);
  return (
    <section className="user-section color-section" style={styleSection}>
      <p>rgb({r},{g},{b})</p>
      <p>{hex}</p>
    </section>
  )
}

export default BoxColor;