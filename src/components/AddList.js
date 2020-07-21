import React, { Component } from 'react';
import './AddList.css';

class AddList extends Component {
  state = {
    text: '',
    number: '',
    value: '',
  }


  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleText = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleNumber = (e) => {
    this.setState({
      number: e.target.value
    });
  }

  handleSelect = (e) => {
    this.setState({
      value: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    });
  }


  handleClick = () => {
    const { text, number, category } = this.state;
    if (text.length > 3) {
      const add = this.props.add(text, number, category);
      if (add) {
        this.setState({
          text: '',
          number: '',
          value: '',
        })
      }
    } else {
      alert("Za krótka nazwa")
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="text">Produkt:</label>
        <input type="text" placeholder="Wpisz produkt" value={this.state.text} onChange={this.handleText} />
        <label htmlFor="number">Ilość: </label>
        <input type="number" placeholder="Wpisz wpisz liczbę" value={this.state.number} onChange={this.handleNumber} /><br />
        <label htmlFor="select">Kategoria: </label>
        <select multiple={true} value={this.state.value} onChange={this.handleSelect}>
          <option value="A"> warzywa </option>
          <option value="B"> owoce </option>
          <option value="C"> słodycze </option>
          <option value="D"> pieczywo </option>
          <option value="E"> chemia gospodarcza </option>
          <option value="F"> nabiał </option>
          <option value="G"> mięso </option>
        </select>
        <button type="submit" value="Dodaj" onClick={this.handleClick}>Dodaj</button>
      </form>
    );
  }
}

export default AddList;