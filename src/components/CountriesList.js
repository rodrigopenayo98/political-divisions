import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../redux/countries/countriesSlice';
import Country from './Country';

console.log('------------country list');

function CountriesList() {
  const countries = useSelector((store) => store.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!countries || countries.countriesArr.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch, countries]);

  if (!countries || countries.status === 'Loading') {
    return (
      <p className="">Loading...</p>
    );
  }

  return (
    <section>
      <ul className="">
        {countries.countriesArr.map((country, idx) => (
          <Country
            key={country.id}
            id={country.id}
            name={country.name}
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
