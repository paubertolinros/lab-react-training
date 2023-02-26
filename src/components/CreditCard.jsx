import React from 'react';

const CreditCard = (props) => {
  const { info: { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } } = props;
  const styleSection = {
    backgroundColor: bgColor,
    color: color
  };
  return (
    <section className="credit-card-section" style={styleSection}>
      <div className="bank-logo-container">
          <p>{type}</p>
      </div>
        <div className="number-div">
          <p> ************{number.substr(-4)}</p>
        </div>
        <div className="expires-bank-div">
          <p><span>Expires </span> {expirationMonth}/{expirationYear}</p>
          <p> {bank}</p>
        </div>
        <div className="owner-div">
          <p>{owner}</p>
        </div>
    </section>
  )

}

export default CreditCard;