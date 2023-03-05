import React, { useState } from 'react';

const Facebook = ({ profileInfo }) => {
  const [usersInfo, setUsersInfo] = useState(profileInfo);
  const [buttonSelected, setButtonSelected] = useState("");
  const [showHide, setShowHide] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const noRepeatCountries = [];
  profileInfo.filter(elem => !noRepeatCountries.includes(elem.country) ? noRepeatCountries.push(elem.country) : elem);
  
  const handleButtonSelected = (country) => {
    setButtonSelected(country)
  };

  const handleHideShowInfo = (name) => {
    setShowHide(prev => !prev)
    setFirstName(name)
  };

  const handleSortUsers = () => {
    setUsersInfo([...usersInfo].sort((a, b) => a.lastName.localeCompare(b.lastName)))
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  };
  
  return (
    <>
      <section className="fb-buttons">
      {noRepeatCountries.map((elem, i) => {
        return (
          <button key={`button-${i}`} onClick={()=> {handleButtonSelected(elem)}} className={elem===buttonSelected ? "blue-button" : "white-button"}>{elem}</button>
        )
      })}
        <button onClick={handleSortUsers} className="white-button">Sort by Name</button>
        <input type="text" onChange={handleSearch} />
      </section>
      {usersInfo.filter(elem => elem.firstName.toLowerCase().includes(searchInput.toLowerCase()))
        .map((elem, i) => {
        return (
          <section onChange={() => handleButtonSelected(elem.country)} className={elem.country === buttonSelected ? "blue-background user-section" : "white-background user-section" } key={i}> 
            <div className="photo-div" onClick={() => handleHideShowInfo(elem.firstName)}>
              <img src={elem.img} alt={elem.firstName} className="user-pic"/>
            </div>
            {firstName === elem.firstName ? <div className="info-user-div">
              <p><span>First Name:</span>{elem.firstName}</p>
              <p><span>Last Name:</span>{elem.lastName}</p>
              <p><span>Country:</span>{elem.country}</p>
              <p><span>Type:</span>{elem.isStudent ? "Student" : "Teacher"}</p>
              </div> : null} 
          </section>
        )
      })}
    </>
  )
}

export default Facebook;