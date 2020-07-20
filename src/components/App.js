import React, { Component } from 'react';
import AddList from './AddList';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  counter = 0
  state = {
    lists: []
  }

  deleteList = (id) => {
    console.log('delete elementu o id ' + id);

    let lists = [...this.state.lists];
    lists = lists.filter(list => list.id !== id)
    this.setState({
      lists
    })
  }
  changeListStatus = (id) => {
    console.log('change w stanie elementu o id ' + id);
    const lists = [...this.state.lists];
    lists.forEach(list => {
      if (list.id === id) {
        list.active = false;
        list.finishDate = new Date().getTime();
      }
    })
    this.setState({
      lists
    })
  }

  addNewList = (text, number, category) => {
    const list = {
      id: this.counter,
      text,
      number,
      category: {
        vegetables: 'warzywa',
        fruits: 'owoce',
        sweets: 'słodycze',
        bread: 'pieczywo',
        chemicals: 'chemia gospodarcza',
        dairy: 'nabiał'
      },
      active: 'true',
      finishDate: null,
    }
    this.counter++

    this.setState(prevState => ({
      lists: [...prevState.lists, list]
    }))
    return true
  }

  render() {
    return (
      <div className="App">
        <h1>Lista zakupów</h1>
        <AddList add={this.addNewList} />
        <TaskList lists={this.state.lists} delete={this.deleteList} change={this.changeListStatus} />
      </div>
    );
  }
}

export default App;