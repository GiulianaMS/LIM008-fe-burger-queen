import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import MenuButtons from './MenuButtons';

const Menu = ({ addPedido }) => (
  <MenuButtons addPedido={addPedido} />
);
export default Menu;

Menu.propTypes = {
  addPedido: PropTypes.func.isRequired,
};
