import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Country({
  countryCode, countryName, currencyCode, areaInSqKm, continentName, population, img, index,
}) {
  const differentStyle = index % 4 === 1 || index % 4 === 2;
  const style = differentStyle ? 'bg-blue-3' : 'bg-blue-4';

  return (
    <NavLink
      className={`country-card ${style}`} // Agrega tus propios nombres de clases aquí
      to={`country/${countryCode}`}
    >
      <div className="country-info">
        <img className="country-image" src={img} alt={countryName} />
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

export default Country;

Country.propTypes = {
  countryCode: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
  areaInSqKm: PropTypes.number.isRequired,
  continentName: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
