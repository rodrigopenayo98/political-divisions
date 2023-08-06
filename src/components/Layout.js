import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import SearchForm from './SearchForm';

const Layout = () => (
  <div className="layout">
    <Navbar />
    <SearchForm />
    <Outlet />
  </div>
);

export default Layout;
