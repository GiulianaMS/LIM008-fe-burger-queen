import React, { Component } from 'react';

class FormCustomer extends Component {
  getValue = (event)=>{
    this.setState({
      fullName : event.target.value
    })
  }
  handleInput = (event) =>{
    console.log(this.state.fullName)
  }
  clearInput = (event) =>{
    event.preventDefault()

  }
  render() {
    return (
      <div className="container">
          <form>
            <p>Nombre del cliente: <input id="id-name" type="text" placeholder=" Ingresar nombre" onChange={this.getValue}></input></p>
            <p><button onClick={this.handleInput}>Enviar</button><button onClick={this.handleInput}>Borrar</button></p>
          </form>
      </div>
    );
  }
}
export default FormCustomer;
