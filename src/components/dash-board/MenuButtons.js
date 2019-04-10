import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";

class MenuButtons extends Component {
  render() {
    return (
        <div className="container">
            <MDBBtn color="pink">Desayuno</MDBBtn>
            <MDBBtn color="cyan">Almuerzo y cena</MDBBtn>
        </div>
    );
  }
}
export default MenuButtons;