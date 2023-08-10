import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import getFlagImageUrl from './Flags';

function PoliticalDivisions({ geonameId }) {
  const [provinceData, setProvinceData] = useState([]);
  const [countryName, setCountryName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const urlProvinces = `https://secure.geonames.org/childrenJSON?geonameId=${geonameId}&username=rodrigopenayo98`;

    axios.get(urlProvinces)
      .then((response) => {
        if (response.data.geonames && response.data.geonames.length > 0) {
          setCountryName(response.data.geonames[0].countryName);
          setProvinceData(response.data.geonames.slice(1));
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching province data:', error);
        setError(true);
        setLoading(false);
      });
  }, [geonameId]);

  return (
    <div>
      {loading ? (
        <p className="span2">Loading...</p>
      ) : (
        <div>
          {error ? (
            <p className="error-message">
              No political divisions were found
              <br />
              for this country or state.
            </p>
          ) : (
            <div>
              <h2 className="title-provinces-container">
                <img src={getFlagImageUrl(provinceData[0].countryCode)} alt="country-flag" className="flag2" />
                {countryName}
              </h2>
              {/* Display country name */}
              <ul className="provinces-list">
                {provinceData.map((province) => (
                  <li key={province.geonameId} className="item-province">
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
          )}
        </div>
      )}
    </div>
  );
}

PoliticalDivisions.propTypes = {
  geonameId: PropTypes.string.isRequired,
};

export default PoliticalDivisions;
