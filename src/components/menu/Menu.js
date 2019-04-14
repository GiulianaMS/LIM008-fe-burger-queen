import React, { Component } from 'react';
import FormCustomer from './FormCustomer';
import { MDBBtn } from "mdbreact";

class Menu extends Component {
  render() {
    return (
      <div>
          <FormCustomer></FormCustomer>
          <div className="container">
            <MDBBtn  color="pink">Desayuno</MDBBtn>
            <MDBBtn color="cyan">Almuerzo y cena</MDBBtn>
          </div>
      </div>
    );
  }
}
export default Menu;
