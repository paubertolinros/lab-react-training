import React from 'react';

const Random = (props) => {
  const { min, max, children } = props;
  const getNumber = Math.floor(Math.random() * max) + min;
  return (
    <section className="user-section">
      <p>{children} {getNumber}</p>
    </section>
  )
}

export default Random;