import { useParams } from 'react-router-dom';
import CountrySection from '../../components/CountrySection';

const SpecificCountry = () => {
  const { id } = useParams();
  return (
    <CountrySection id={id} />
  );
};

export default SpecificCountry;
