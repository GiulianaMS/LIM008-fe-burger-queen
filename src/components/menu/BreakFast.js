import React from 'react';
import './Menu.css';
import getProductsFirebase from 'D:/PORTAFOLIO/LIM008-fe-burger-queen/src/controller/ProductsFirebase';
import CardProduct from './CardProduct';

const Breakfast = () => {
  const arr = getProductsFirebase();
  const products = arr.map((product) => {
    if (product.categoria === 'Desayuno') {
      return (CardProduct(product));
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
