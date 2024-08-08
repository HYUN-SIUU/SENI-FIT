import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = forwardRef((props, ref) => (
  <header ref={ref}>
    <nav>
      <ul>
        <li><Link className="header-menu" to="/teacher">강사 신청</Link></li>
        <li><Link className="header-menu" to="/experience">체험 신청</Link></li>
        <li><Link className="header-menu" to="/info">회사 소개</Link></li>
        <li><Link className="header-menu" to="/">MAIN</Link></li>
      </ul>
    </nav>
  </header>
));

export default Header;
