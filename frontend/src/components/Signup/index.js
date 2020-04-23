// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './signup.scss';

// == Composant
const Signup = ({
  lastname,
  firstname,
  email,
  password,
  passwordConfirmation,
  restaurantName,
  address,
  postcode,
  city,
  country,
  phone,
  cis,
  averageEatingTime,
  coversNumber, 
  changeSignUpInputValue,
  handleSubscribe,
  showPasswordError,
  handleChangePasswordConfirmation,
  signupErrors,
  showSignupConfirmation,
}) => {

  // handle input change
  const handleChange = (evt) => {
    changeSignUpInputValue(evt.target.value, evt.target.name);
  };

  // const areSamePassword = false;

  // handle submit
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (password === passwordConfirmation && password.length > 0 ) {
      handleSubscribe();
    }
  };

  const checkPasswordConfirmation = (e) => {
    if (e.target.value == password) {
      handleChangePasswordConfirmation(false);
      handleChange(e);
    } else {
      handleChangePasswordConfirmation(true);
      handleChange(e);
    }
  };

  const checkPassword = (e) => {
    if (e.target.value == passwordConfirmation) {
      handleChangePasswordConfirmation(false);
      handleChange(e);
    }
    else {
      handleChangePasswordConfirmation(true);
      handleChange(e);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0,0);
    return true;
  };

  return (
    <div className="page-container">
    <div className="signup-wrapper">
      <h1>Inscription</h1>

      <form id="signup-form" onSubmit={handleSubmit}>

        { signupErrors.length > 0 && scrollToTop() && (
        <div id="errors">
          <h4>Des erreurs ont été détectées :</h4>
          <ul>
            {signupErrors.map((error) => {
              if (error.field === 'email') {
                return <li><span>Email :</span> {error.message}</li>;
              }
              if (error.field === 'password') {
                return <li><span>Mot de passe :</span> {error.message}</li>;
              }
              if (error.field === 'lastname') {
                return <li><span>Nom :</span> {error.message}</li>;
              }
              if (error.field === 'firstname') {
                return <li><span>Prénom :</span> {error.message}</li>;
              }
              if (error.field === 'siretCode') {
                return <li><span>SIRET :</span> {error.message}</li>;
              }
              if (error.field === 'name') {
                return <li><span>Nom du restaurant :</span> {error.message}</li>;
              }
              if (error.field === 'address') {
                return <li><span>Adresse restaurant :</span> {error.message}</li>;
              }
              if (error.field === 'city') {
                return <li><span>Ville :</span> {error.message}</li>;
              }
              if (error.field === 'country') {
                return <li><span>Pays :</span> {error.message}</li>;
              }
              if (error.field === 'phone') {
                return <li><span>Téléphone :</span> {error.message}</li>;
              } 
              if (error.field === 'siret code') {
                return <li><span>N° SIRET :</span> {error.message}</li>;
              }
              if (error.field === 'adresse postale') {
                return <li><span>Adresse :</span> {error.message}</li>;
              }
            })}
          </ul>
        </div>
        )}

        { showSignupConfirmation && scrollToTop() &&
        <div id="signup-confirmation">
          <span>Merci, vous avez bien été enregistré ! Vous pouvez désormais vous 
            <a href="/login"> connecter à votre espace</a>.
          </span>
        </div>
        }


        <span className="form-zone-title">Vous concernant 
        <img src="data:image/svg+xml;base64,
          PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDYwLjczMSA2MC43MzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwLjczMSA2MC43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NC44NTMsNDIuOTUyaDExLjAzMUwzOC4xMDEsNjAuNzMxTDIwLjMyNCw0Mi45NTJoMTEuMTZDMjkuOTA4LDIyLjAwMSwxOC45OTUsNS4wNzUsNC44NDcsMC45NiAgICBDNy4wMDcsMC4zMzIsOS4yNDMsMCwxMS41MjksMEMyOC44MTIsMCw0My4wMzcsMTguOCw0NC44NTMsNDIuOTUyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkY4NDAwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />
        </span>


        <label htmlFor="lastname">Nom</label>
        <input
          key="lastname"
          name="lastname"
          placeholder="Nom"
          id="lastname"
          value={lastname}
          onChange={handleChange}
          required
        />

        <label htmlFor="firstname">Prénom</label>
        <input
          key="firstname"
          name="firstname"
          placeholder="Prénom"
          id="firstname"
          value={firstname}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Adresse email</label>
        <input
          key="email"
          name="email"
          type="email"
          placeholder="Adresse email"
          id="email"
          value={email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          key="password"
          name="password" 
          type="password"
          placeholder="Mot de passe"
          id="password"
          value={password}
          onChange={handleChange, checkPassword}
          required
        />

        <label htmlFor="passwordConfirmation">Confirmation du mot de passe</label>
        <input
          key="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmation du mot de passe"
          id="password-confirmation"
          value={passwordConfirmation}
          onChange={checkPasswordConfirmation}
          required
        />

        { showPasswordError && <span id="password-error">Les deux mots de passe ne correspondent pas.</span>}

        <span className="form-zone-title">Concernant votre restaurant 
          <img src="data:image/svg+xml;base64,
          PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDYwLjczMSA2MC43MzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwLjczMSA2MC43MzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NC44NTMsNDIuOTUyaDExLjAzMUwzOC4xMDEsNjAuNzMxTDIwLjMyNCw0Mi45NTJoMTEuMTZDMjkuOTA4LDIyLjAwMSwxOC45OTUsNS4wNzUsNC44NDcsMC45NiAgICBDNy4wMDcsMC4zMzIsOS4yNDMsMCwxMS41MjksMEMyOC44MTIsMCw0My4wMzcsMTguOCw0NC44NTMsNDIuOTUyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkY4NDAwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" />
        </span>

        <label htmlFor="restaurantName">Nom du restaurant</label>
        <input
          key="restaurantName"
          name="restaurantName"
          placeholder="Nom de votre restaurant"
          id="name"
          value={restaurantName}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Adresse du restaurant</label>
        <input
          key="address"
          name="address"
          placeholder="Adresse"
          id="address"
          value={address}
          onChange={handleChange}
          required
        />

        <label htmlFor="postcode">Code postal</label>
        <input
          key="postcode"
          name="postcode"
          placeholder="Code postal"
          id="postcode"
          value={postcode}
          onChange={handleChange}
          type="number"
          required
        />

        <label htmlFor="city">Ville</label>
        <input
          key="city"
          name="city"
          placeholder="Ville"
          id="city"
          value={city}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="country">Pays</label>
        <input
          key="country"
          name="country"
          placeholder="Pays"
          id="country"
          value={country}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Téléphone</label>        
        <input
          key="phone"
          name="phone"
          placeholder="Téléphone"
          id="phone"
          value={phone}
          onChange={handleChange}
          type="number"
          required
        />

        <label htmlFor="cis">N°SIRET</label>           
        <input
          key="cis"
          name="cis"
          placeholder="N°SIRET"
          id="cis"
          value={cis}
          type="number"
          onChange={handleChange}
          required
        />

        <label htmlFor="averageEatingTime">Temps moyen d'un repas dans votre restaurant</label>   
        <input
          key="averageEatingTime"
          name="averageEatingTime"
          placeholder="Temps moyen de repas en minutes"
          id="average-eating-time"
          type="number"
          step="5"
          min="0"
          value={averageEatingTime}
          onChange={handleChange}
          required
        />

        <label htmlFor="coversNumber">Nombre de couverts</label>   
        <input
          key="coversNumber"
          name="coversNumber"
          placeholder="Nombre de couverts"
          id="covers-number"
          type="number"
          step="1"
          min="1"
          value={coversNumber}
          onChange={handleChange}
          required
        />

        <button type="submit" className="button-alt">Inscription</button>
      </form>
    </div>
    </div>
  );
};

// props check
Signup.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  restaurantName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // number
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  cis: PropTypes.PropTypes.string.isRequired,
  averageEatingTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // number
  coversNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // number 
  changeSignUpInputValue: PropTypes.func.isRequired,
  handleSubscribe: PropTypes.func.isRequired,
};

// == Export
export default Signup;
