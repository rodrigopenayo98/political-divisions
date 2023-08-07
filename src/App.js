import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Countries from './redux/routes/Countries';
import SpecificCountry from './redux/routes/SpecificCountry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Countries />} />
          <Route path="coin/:id" element={<SpecificCountry />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
