import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFoundList } from '../redux/countries/countriesSlice';

function SearchForm() {
  const dispatch = useDispatch();
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    dispatch(updateFoundList(''));
  }, [dispatch]);

  const handleFilterChange = (event) => {
    dispatch(updateFoundList(event.target.value));
    if (event.target.value !== '') {
      setSearching(true);
    } else {
      setSearching(false);
    }
  };

  return (
    <>
      <form className="form-countries">
        <label htmlFor="name" className="label-countries">
          <input onChange={(event) => { handleFilterChange(event); }} type="text" id="name" name="name" placeholder="Filter by country name..." className="input-countries" />
        </label>
      </form>
      <p className="text-results-countries">{searching ? 'Country found' : 'Countries'}</p>
    </>
  );
}

export default SearchForm;
