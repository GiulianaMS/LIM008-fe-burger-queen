import React, { useState } from 'react';
import { MDBBtn } from 'mdbreact';
import { Breakfast, LunchDinner } from './menu/Menu';
import getProductsFirebase from '../controller/ProductsFirebase';
import Navigation from './Navigation';
import FormCustomer from './menu/FormCustomer';
import Navbar from 'react-bootstrap/Navbar';
import { MDBFooter } from 'mdbreact';

const OrderView = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="col-sm-6 col-xs-12">
          <FormCustomer />
          <div className="container">
            <MDBBtn color="pink" onClick={() => { setIsShown(!isShown); }}>Desayuno</MDBBtn>
            <MDBBtn color="cyan" onClick={() => { setIsShown(!isShown); }}>Almuerzo y cena</MDBBtn>
          </div>
          <div>
            {isShown ? <Breakfast callback={getProductsFirebase} /> : <LunchDinner callback={getProductsFirebase} />}
          </div>
        </div>

        <div className="col-sm-6 col-xs-12">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand className="center">Pedido</Navbar.Brand>
          </Navbar>
          <div>
            <p>Orden</p>
          </div>
          <MDBFooter color="purple" className="font-small mt-2">
            <div className="footer-copyright text-center py-3">
              <p>Total</p>
            </div>
          </MDBFooter>
        </div>
      </div>
    </div>
  );
};
export default OrderView;
