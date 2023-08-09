import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import getFlagImageUrl from './Flags';

function Country({
  countryCode, // Cambia countryCode a la variable directamente
  countryName,
  currencyCode,
  areaInSqKm,
  continentName,
  population,
  index,
}) {
  const differentStyle = index % 4 === 1 || index % 4 === 2;
  const style = differentStyle ? 'bg-blue-3' : 'bg-blue-4';

  const flagImageUrl = getFlagImageUrl(countryCode); // Usa countryCode directamente

  return (
    <NavLink className={`country-card ${style}`} to={`country/${countryCode}`}>
      <div className="country-info">
        <img className="country-image" src={flagImageUrl} alt={countryName} />
        <p className="country-name">{countryName}</p>
        <p className="currency-code">{currencyCode}</p>
      </div>
      <div className="country-details">
        <p className="area">
          Área:
          {areaInSqKm}
          {' '}
          km²
        </p>
        <p className="continent">
          Continente:
          {continentName}
        </p>
        <p className="population">
          Población:
          {population}
        </p>
      </div>
    </NavLink>
  );
}

Country.propTypes = {
  countryCode: PropTypes.string,
  countryName: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
  areaInSqKm: PropTypes.string.isRequired,
  continentName: PropTypes.string.isRequired,
  population: PropTypes.string,
  index: PropTypes.number.isRequired,
};

Country.defaultProps = {
  countryCode: 0,
  population: 'not specificed',
};

export { Country, getFlagImageUrl };
