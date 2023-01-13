import React from 'react';
import { Link } from 'react-router-dom';
import userAvatar from '../../images/user-avatar.avif';
import './header.scss';

const Header = () => (
  <div className="header">
    <Link to="/">
      <div className="logo">Movie App</div>
    </Link>
    <div className="user-avatar">
      <img src={userAvatar} alt="" />
    </div>
  </div>
);

export default Header;
