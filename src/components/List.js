import React from 'react';

const List = (props) => {
  const { id, text, number, finishDate, active, value } = props.list;

  if (active) {
    return (
      <div>
        <p>
          Produkt: <strong> {text} </strong>
        Ilośc: <strong> {number} </strong>
        Kategoria: <select>{value}</select>
          <button onClick={() => props.change(id)}>Gotowa lista</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const date = new Date(finishDate).toLocaleDateString();
    return (
      <div>
        <p>
          Produkt: <strong> {text} </strong>
          Ilośc: <strong> {number} </strong>
          Kategoria: <select>{value}</select>
          Data zamówienia: <strong> {date} </strong>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }

}

export default List;