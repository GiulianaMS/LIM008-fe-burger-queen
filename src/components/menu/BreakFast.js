import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import getProductsFirebase from 'D:/PORTAFOLIO/LIM008-fe-burger-queen/src/controller/ProductsFirebase';
import CardProduct from './CardProduct';

const Breakfast = ({ addPedido }) => {
  const arr = getProductsFirebase();
  const products = arr.map((product) => {
    if (product.categoria === 'Desayuno') {
      return (<CardProduct data={product} addPedido={addPedido} />);
    }
  });
  return (
    <div>
      <ul className="block">
        {products}
      </ul>
    </div>
  );
};

export default Breakfast;

Breakfast.propTypes = {
  addPedido: PropTypes.func.isRequired,
};
