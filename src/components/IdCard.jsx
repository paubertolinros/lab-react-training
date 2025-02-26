import React from 'react';

const IdCard = (user) => {
  const { user: { lastName, firstName, gender, height, birth, picture } } = user;
  const changeFormatBirth = new Date(birth).toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
  }).replace(',', '');
  
  return (
    <section className="user-section">
      <div className="photo-div">
        <img src={picture} className="user-pic" alt="{firstName}"/>
      </div>
      <div className="info-user-div">
        <p> <span>Last name: </span> {lastName}</p>
        <p><span>First name: </span> {firstName}</p>
        <p><span>Gender: </span> {gender}</p>
        <p><span>Height: </span> {height}</p>
        <p><span>Birth: </span> {changeFormatBirth}</p>
      </div>
    </section>
  )

}

export default IdCard;