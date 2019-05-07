import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import getProductsFirebase from 'D:/PORTAFOLIO/LIM008-fe-burger-queen/src/controller/ProductsFirebase';
import CardProduct from './CardProduct';
import CardProductExtend from './CardProductExtend';

const LunchDinner = ({ addPedido }) => {
  const arr = getProductsFirebase();
  const Hamburguesas = arr.map((product) => {
    if (product.categoria === 'Resto del dia') {
      if (product.tipo === 'Hamburguesas') {
        return (
          <div className="display-inlineblock">
            <CardProductExtend data={product} addPedido={addPedido} />
          </div>
        );
      }
    }
  });
  const Acompañamientos = arr.map((product) => {
    if (product.categoria === 'Resto del dia') {
      if (product.tipo === 'Acompañamientos') {
        return (
          <div className="display-inlineblock">
            <CardProduct data={product} addPedido={addPedido} />
          </div>
        );
      }
    }
  });
  const Tomar = arr.map((product) => {
    if (product.categoria === 'Resto del dia') {
      if (product.tipo === 'Para tomar') {
        return (
          <div className="display-inlineblock">
            <CardProduct data={product} addPedido={addPedido} />
          </div>
        );
      }
    }
  });
  return (
    <div>
      <div>
        <p>Hamburguesas:</p>
        {Hamburguesas}
      </div>
      <div>
        <p>Acompañamientos:</p>
        {Acompañamientos}
      </div>
      <div>
        <p>Para tomar:</p>
        {Tomar}
      </div>
    </div>
  );
};
export default LunchDinner;

LunchDinner.propTypes = {
  addPedido: PropTypes.func.isRequired,
};
