import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <img src="../../assets/icons/logo.png" alt="logo" />
      <Link to="/" className="header-link">
        Форма
      </Link>
      <Link to="/result" className="header-link">
        Превью
      </Link>
    </StyledHeader>
  );
};

export default Header;
