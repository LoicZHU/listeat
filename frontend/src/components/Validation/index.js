// == Import npm
import React from 'react';

// == Import
import './validation.scss';

// == Composant
const Validation = ({
  restaurantName,
  ticketCutlery,
  ticketWaitingTime,
  sendTicketValidation,
}) => {
  // handle yes button click
  const handleYesClick = () => {
    sendTicketValidation('validate');
  };

  // handle no button click
  const handleNoClick = () => {
    sendTicketValidation('cancel');
  };

  window.scrollTo(0,0);

  return (
    <main className="ticket__validation">
      <h1>{restaurantName}</h1>

      <div className="ticket__validation__infos">
        <p>{ticketCutlery == 1 ? 'Nombre de couvert souhaité :' : 'Nombre de couverts souhaités :'}
          <span className="ticket__validation__info"> {ticketCutlery}</span>
        </p>

        <p>Temps d'attente estimé :
          <span className="ticket__validation__info"> {ticketWaitingTime} {ticketWaitingTime > 1 ? 'minutes' : 'minute'}
          </span>
        </p>
      </div>

      <div className="ticket__validation__question">
        <p>Souhaitez-vous vous inscrire sur la liste d'attente ?</p>
        <div id="choice">
          <button className="yes__button button" type="button" onClick={handleYesClick}>Oui</button>
          <button className="no__button button" type="button" onClick={handleNoClick}>Non</button>
        </div>
      </div>
    </main>
  );
};

// == Export
export default Validation;
