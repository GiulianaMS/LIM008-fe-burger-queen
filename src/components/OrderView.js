import React, { useState } from 'react';
import './OrderView.css';
import { MDBFooter } from 'mdbreact';
import Menu from './Menu/index';
import Navigation from './Navigation';
import Pedido from './pedido/Pedido';


const OrderView = () => {
  const [isMenu, setisMenu] = useState([]);
  const addPedido = (obj) => {
    const arr = [...isMenu, obj];
    setisMenu(arr);
  };

  return (
    <div>
      {/* header */}
      <Navigation />
      {/* menu */}
      <div className="main-orderview row black p-0 m-0">
        <div className="col-sm-6 col-xs-12 white p-3">
          <Menu addPedido={addPedido} />
        </div>
        {/* pedido */}
        <div className="main-pedido col-sm-6 col-xs-12 p-3">
          <div className="aling-center">
            <h4 className="title-pedido">Pedido</h4>
          </div>
          <Pedido isMenu={isMenu} />
          <MDBFooter color="black" className="font-small mt-2">
            <div className="footer-copyright text-center py-2">
              <p>Total</p>
            </div>
          </MDBFooter>
        </div>
      </div>
    </div>
  );
};
export default OrderView;
