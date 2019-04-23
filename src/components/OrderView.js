import React, { useState } from 'react';
import './OrderView.css';
import { MDBFooter } from 'mdbreact';
import Menu from './Menu/index';
import Navigation from './Navigation';
import Pedido from './pedido/Pedido';


const OrderView = () => {
  const [ispedido, setIsPedido] = useState([]);
  return (
    <div>
      {/* header */}
      <Navigation />
      {/* menu */}
      <div className="main-orderview row black">
        <div className="col-sm-6 col-xs-12 white">
          <Menu />
        </div>
        {/* pedido */}
        <div className="main-pedido col-sm-6 col-xs-12 m-blank-3">
          <div className="aling-center">
            <h4 className="title-pedido">Pedido</h4>
          </div>
          <Pedido />
          <MDBFooter color="black" className="font-small mt-2">
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
