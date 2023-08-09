import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountrySection from '../../components/CountrySection';
import StatusType from '../../components/StatusTypes';

const SpecificCountry = () => {
  const { geonameId } = useParams();
  const countries = useSelector((store) => store.countries);

  if (!countries || countries.status === StatusType.LOADING) {
    return <span>Cargando...</span>;
  }

  return <CountrySection geonameId={geonameId} />;
};

export default SpecificCountry;
