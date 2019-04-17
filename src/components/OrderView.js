import React, { useState } from 'react';
import './OrderView.css';
import { MDBBtn, MDBFooter } from 'mdbreact';
import { Breakfast, LunchDinner } from './menu/Menu';
import FormCustomer from './menu/FormCustomer';
import Navigation from './Navigation';
import getProductsFirebase from '../controller/ProductsFirebase';
import Pedido from './pedido/Pedido';

const OrderView = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <Navigation />
      <div className="main-orderview row black">
        <div className="col-sm-6 col-xs-12 white">
          <FormCustomer />
          <div className="container">
            <MDBBtn color="pink" onClick={() => { setIsShown(!isShown); }}>Desayuno</MDBBtn>
            <MDBBtn color="cyan" onClick={() => { setIsShown(!isShown); }}>Almuerzo y cena</MDBBtn>
          </div>
          <div>
            {isShown ? <Breakfast callback={getProductsFirebase} />
              : <LunchDinner callback={getProductsFirebase} />}
          </div>
        </div>
        <div className="main-pedido col-sm-6 col-xs-12 m-blank-3">
          <div className="aling-center">
            <h4 className="title-pedido">Pedido</h4>
          </div>
          <Pedido />
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
