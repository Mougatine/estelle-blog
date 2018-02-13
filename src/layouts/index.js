import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';
import 'font-awesome/css/font-awesome.min.css';

import wallpaper from "../../static/img/food_wallpaper.jpg"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Blog sur la nutrition" />
    <Navbar />
    <img src={wallpaper} alt="food wallpaper"/>
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
