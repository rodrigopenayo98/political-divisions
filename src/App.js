import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Countries from './redux/routes/Countries';
import SpecificCountry from './redux/routes/SpecificCountry';
import { getCountries } from './redux/countries/countriesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Countries />} />
          <Route path="country/:geonameId" element={<SpecificCountry />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
