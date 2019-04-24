import React, { useState } from 'react';
import './Menu.css';
import { MDBBtn } from 'mdbreact';
import PropTypes from 'prop-types';
import Breakfast from './BreakFast';
import LunchDinner from './LunchDinner';

const MenuButtons = ({ addPedido }) => {
  const [isShown, setIsShown] = useState(true);
  return (
    <div>
      <div>
        <MDBBtn color="pink" onClick={() => { setIsShown(!isShown); }}>Desayuno</MDBBtn>
        <MDBBtn color="cyan" onClick={() => { setIsShown(!isShown); }}>Almuerzo y cena</MDBBtn>
      </div>
      <div>
        {isShown ? <Breakfast addPedido={addPedido} /> : <LunchDinner addPedido={addPedido} />}
      </div>
    </div>
  );
};
export default MenuButtons;

MenuButtons.propTypes = {
  addPedido: PropTypes.func.isRequired,
};
