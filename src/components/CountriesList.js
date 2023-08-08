import { useSelector } from 'react-redux';
import Country from './Country';
import StatusType from './StatusTypes';

function CountriesList() {
  const countries = useSelector((store) => store.countries);

  if (!countries || countries.status === StatusType.LOADING) {
    return <span>Loading...</span>;
  }
  console.log(countries);
  return (
    <section>
      <ul>
        {countries?.countriesArr.map((country, index) => (
          <Country
            key={country.geonameId}
            index={index}
            countryName={country.countryName}
            img=""
            countryCode={country.geonamesId}
            currencyCode={country.currencyCode}
            areaInSqKm={country.areaInSqKm}
            continentName={country.continentName}
            population={country.population}
          />
        ))}
      </ul>
    </section>
  );
}

export default CountriesList;
