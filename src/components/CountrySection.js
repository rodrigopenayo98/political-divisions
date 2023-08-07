import PropTypes from 'prop-types';
import React from 'react';

function CountrySection({ countries }) {
  if (!countries || countries.length === 0) {
    return (
      <p className="">
        No countries available.
      </p>
    );
  }

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.countryCode}>
            <p>
              Image:
              <img src={country.img} alt={country.countryName} />
            </p>
            <h3>{country.countryName}</h3>
            <p>
              Currency:
              {country.currencyCode}
            </p>
            <p>
              Area:
              {country.areaInSqKm}
              {' '}
              sq km
            </p>
            <p>
              Continent:
              {country.continentName}
            </p>
            <p>
              Population:
              {country.population}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountrySection;

CountrySection.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    currencyCode: PropTypes.string.isRequired,
    areaInSqKm: PropTypes.number.isRequired,
    continentName: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  })).isRequired,
};
