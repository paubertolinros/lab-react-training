import React from 'react';
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';
import defaultLogo from '../assets/images/defaultLogo.png';

const CreditCard = (props) => {
  const { info: { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } } = props;
  
  const styleSection = {
    backgroundColor: bgColor,
    color: color
  };

  const monthZero = (month) => 
    month.toString().length === 1 ? "0" + month : month;

  const picklogo = (cardType) => 
      cardType === 'Visa'
          ? <img src={visa} className="logo-credit-card-visa" alt="visa logo" />
          : type === 'Master Card'
              ? <img src={mastercard} className="logo-credit-card-mastercard" alt="mastercard logo" />
              : <img src={defaultLogo} className="logo-credit-card-default" alt="no available logo" />
  
  const logo = picklogo(type)
  const newMonth = monthZero(expirationMonth);
  return (
    <section className="credit-card-section" style={styleSection}>
      <div className="bank-logo-container">
        {/* {type === "Visa" ? <img src={visa} className="logo-credit-card" alt="visa logo" /> : <img src={mastercard} className="logo-credit-card" alt="mastercard logo" />}*/}
        {logo}
      </div>
        <div className="number-div">
          <p className="card-number"> ••• ••• ••• {number.substr(-4)}</p>  
        </div>
        <div className="expires-bank-div">
          <p><span>Expires </span> {newMonth}/{expirationYear.toString().substr(-2)}</p>
          <p> {bank}</p>
        </div>
        <div className="owner-div">
          <p>{owner}</p>
        </div>
    </section>
  )

}

export default CreditCard;