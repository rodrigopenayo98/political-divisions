import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { IoChevronBack } from 'react-icons/io5';

const Navbar = () => (
  <header className="">
    <NavLink to="/">
      <div className="see-all-container">
        <IoChevronBack className="arrow-left" />
        <p>See all</p>
      </div>
    </NavLink>
    <h1 className="main-title">POLITICAL-DIVISIONS</h1>
    <div className="icons-container">
      <FaMicrophone />
      <IoMdSettings />
    </div>
  </header>
);

export default Navbar;
