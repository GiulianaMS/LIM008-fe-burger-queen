import React, { useState } from 'react';
import './Menu.css';
import { MDBBtn } from 'mdbreact';
import Breakfast from './BreakFast';
import LunchDinner from './LunchDinner';

const MenuButtons = () => {
  const [isShown, setIsShown] = useState(true);
  return (
    <div>
      <div className="container">
        <MDBBtn color="pink" onClick={() => { setIsShown(!isShown); }}>Desayuno</MDBBtn>
        <MDBBtn color="cyan" onClick={() => { setIsShown(!isShown); }}>Almuerzo y cena</MDBBtn>
      </div>
      <div>
        {isShown ? <Breakfast /> : <LunchDinner />}
      </div>
    </div>
  );
};
export default MenuButtons;
