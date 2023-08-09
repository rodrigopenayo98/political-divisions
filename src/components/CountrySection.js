import React from 'react';
import PropTypes from 'prop-types';
import getFlagImageUrl from './Flags';
import PoliticalDivisions from './PoliticalDivisions';

function CountrySection({ geonameId }) {
  const flagImageUrl = getFlagImageUrl(geonameId);

  return (
    <div>
      <img src={flagImageUrl} alt="country-name" className="flag2" />
      <PoliticalDivisions geonameId={geonameId} />
    </div>
  );
}

CountrySection.propTypes = {
  geonameId: PropTypes.string.isRequired,
  countryProvinces: PropTypes.shape({
    countryCode: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountrySection;
