import React from 'react';
import Card from 'react-bootstrap/Card';

export const Breakfast = ({ callback}) => {
  const arr = callback();
  const products = arr.map((product) => {
    if (product.categoria === 'Desayuno') {
      return (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src=""/>
            <Card.Body>
              <Card.Title>{product.nombre}</Card.Title>
              <Card.Text>4</Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    }
  });
  return (
    <div>
      <ul>
        {products}
      </ul>
    </div>
  );
};

export const LunchDinner = ({ callback }) => {
  const arr = callback();
  const products = arr.map((product) => {
    if (product.categoria === 'Resto del dia') {
      return (
        <p>{product.id}</p>
      );
    }
  });
  return (
    <div>
      <ul>
        {products}
      </ul>
    </div>
  );
};
