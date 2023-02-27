import React from 'react';

const Random = (props) => {
  const { min, max} = props;
  const getNumber = Math.floor(Math.random() * max) + min;
  return (
    <section className="user-section">
      <p>Random value between {min} and {max} → {getNumber}</p>
    </section>
  )
}

export default Random;