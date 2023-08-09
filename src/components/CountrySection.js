import React from 'react';
import PropTypes from 'prop-types';
import PoliticalDivisions from './PoliticalDivisions';

function CountrySection({ geonameId }) {
  return (
    <div>
      <PoliticalDivisions geonameId={geonameId} />
    </div>
  );
}

CountrySection.propTypes = {
  geonameId: PropTypes.string.isRequired,
};

export default CountrySection;
