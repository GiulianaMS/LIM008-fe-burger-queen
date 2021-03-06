import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const CardProductExtend = ({ data, addPedido }) => (
  <span type="button" className="list-product">
    <Card className="main-card" style={{ width: '9rem' }}>
      <Card.Body>
        <p className="card-title">{data.nombre}</p>
        <Image className="img-product" src={data.imagen} />
        <br />
        <Card.Text>S/. {data.precio}</Card.Text>
        <select>
          <option>Pollo</option>
          <option>Carne</option>
          <option>Vegano</option>
        </select>
        <select>
          <option>Huevo</option>
          <option>Queso</option>
          <option>Ninguno</option>
        </select>
      </Card.Body>
      <button className="btn-hamburguer" onClick={() => addPedido(data)}> Enviar </button>
    </Card>
  </span>
);

export default CardProductExtend;

CardProductExtend.propTypes = {
  data: PropTypes.shape({}).isRequired,
  addPedido: PropTypes.func.isRequired,
};
