import React, { useState } from 'react';

const Facebook = ({profileInfo}) => {
  

  return (
    <>
      {profileInfo.map((elem, i) => {
        return (
          <section className="user-section" key={i}>
            <div className="photo-div">
              <img src={elem.img} alt={elem.firstName} className="user-pic"/>
            </div>
            <div className = "info-user-div">
              <p><span>First Name:</span>{elem.firstName}</p>
              <p><span>Last Name:</span>{elem.lastName}</p>
              <p><span>Country:</span>{elem.country}</p>
              <p><span>Type:</span>{elem.isStudent ? "Student" : "Teacher"}</p>
            </div>
          </section>
        )
      })}
    </>
  )
}

export default Facebook;