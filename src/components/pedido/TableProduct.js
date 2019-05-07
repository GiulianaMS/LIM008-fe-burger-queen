import React from 'react';
import './pedido.css';

const TableProduct = ({ isMenu }) => (
  <tbody>
    {isMenu.map(product => (
      <tr>
        <td>{product.cantidad}</td>
        <td>{product.nombre}</td>
        <td>S/. {product.precio}</td>
        <td>TOTAL</td>
        <td><button>X</button></td>
      </tr>
    ))}
  </tbody>
);

export default TableProduct;
