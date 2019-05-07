import React from 'react';
import './pedido.css';
import Table from 'react-bootstrap/Table';
import TableProduct from './TableProduct';

const TablePedido = ({ isMenu }) => (
  <Table responsive borderless>
    <thead>
      <tr>
        <th><button>-</button>CANT.<button>+</button></th>
        <th>PRODUCTO</th>
        <th>P.UNIT</th>
        <th>TOTAL</th>
        <th>X</th>
      </tr>
    </thead>
    <TableProduct isMenu={isMenu} />
  </Table>
);
export default TablePedido;
