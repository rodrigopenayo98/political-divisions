import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../redux/countries/countriesSlice';
import Country from './Country';

function CountriesList() {
  const countries = useSelector((store) => store.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!countries || countries.countriesArr.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch, countries]);

  if (!countries || countries.status === 'Loading') {
    return <p>Loading...</p>;
  }

  const { geonames } = countries.countriesArr[0].data;

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
