import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import getFlagImageUrl from './Flags';

function PoliticalDivisions({ geonameId }) {
  const [provinceData, setProvinceData] = useState([]);
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    const urlProvinces = `http://api.geonames.org/childrenJSON?geonameId=${geonameId}&username=rodrigopenayo98`;

    axios.get(urlProvinces)
      .then((response) => {
        if (response.data.geonames && response.data.geonames.length > 0) {
          setCountryName(response.data.geonames[0].countryName); // Set country name
          setProvinceData(response.data.geonames.slice(1)); // Exclude the country from provinceData
        }
      })
      .catch((error) => {
        console.error('Error fetching province data:', error);
      });
  }, [geonameId]);

  return (
    <div>
      {provinceData.length > 0 ? (
        <div>
          <h2>
            <img src={getFlagImageUrl(provinceData[0].countryCode)} alt="country-flag" className="flag2" />
            {countryName}
          </h2>
          {/* Display country name */}
          <ul>
            {provinceData.map((province) => (
              <li key={province.geonameId}>
                Province / State:
                {' '}
                {province.toponymName}
                <br />
                Population:
                {' '}
                {province.population}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay datos de provincia disponibles.</p>
      )}
    </div>
  );
}

PoliticalDivisions.propTypes = {
  geonameId: PropTypes.string.isRequired,
};

export default PoliticalDivisions;
