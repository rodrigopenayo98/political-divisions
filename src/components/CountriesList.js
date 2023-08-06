import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../redux/countries/countriesSlice';
import Country from './Country';

function CountryList() {
  const countries = useSelector((store) => store.countries);
  const dispatch = useDispatch;

  useEffect(() => {
    if (countries.countriesArr.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch, countries.countriesArr.length]);

  if (countries.status === 'Loading') {
    return (
      <p className="">Loading...</p>
    );
  }

  return (
    <section>
      {countries.filteredList.length === 0 ? (
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
      ) : (
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
      )}
    </section>
  );
}

export default CountryList;
