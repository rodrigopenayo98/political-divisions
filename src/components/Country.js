import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Country({
  countryCode: geonamesId,
  countryName,
  currencyCode,
  areaInSqKm,
  continentName,
  population,
  img,
  index,
}) {
  const differentStyle = index % 4 === 1 || index % 4 === 2;
  const style = differentStyle ? 'bg-blue-3' : 'bg-blue-4';

  return (
    <NavLink className={`country-card ${style}`} to={`country/${geonamesId}`}>
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
  countryCode: PropTypes.number,
  countryName: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
  areaInSqKm: PropTypes.string.isRequired,
  continentName: PropTypes.string.isRequired,
  population: PropTypes.string,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

Country.defaultProps = {
  countryCode: 0,
  population: 'not specificed',
};
