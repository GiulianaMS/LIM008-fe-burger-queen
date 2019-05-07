import React from 'react';
import './pedido.css';
import HeaderPedido from './HeaderPedido';
import TablePedido from './TablePedido';

const Pedido = ({ isMenu }) => (
  <div>
    <HeaderPedido />
    <TablePedido isMenu={isMenu} />
  </div>
);
export default Pedido;
