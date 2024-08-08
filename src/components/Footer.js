import React, { forwardRef } from 'react';
import './Footer.css';

const Footer = forwardRef((props, ref) => (
  <footer ref={ref}>
    <p>created by Hyunsu Kim</p>
  </footer>
));

export default Footer;
