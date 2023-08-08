import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { getCountries } from '../redux/countries/countriesSlice';
import Country from './Country';

const StatusType = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

function CountriesList() {
  const countries = useSelector((store) => store.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const { geonames } = useMemo(() => {
    if (!countries || countries.status === StatusType.LOADING) {
      return { geonames: [] };
    }
    return countries;
  }, [countries]);

  if (!geonames) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <ul>
        {geonames.map((country, idx) => (
          <Country
            key={country.geonameId}
            id={country.geonameId}
            name={country.countryName}
            // Include other properties you want to pass
            symbol={country.symbol}
            img={country.img}
            price={country.price}
            change={country.change}
            index={idx}
          />
        ))}
      </ul>
    </section>
  );
}

export default CountriesList;
