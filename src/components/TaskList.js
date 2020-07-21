import React from 'react';
import List from './List'

const TaskList = (props) => {

  const active = props.lists.filter(list => list.active)
  const done = props.lists.filter(list => !list.active)
  console.log(active, done);

  const activeLists = active.map(list => <List key={list.id} list={list} delete={props.delete} change={props.change} update={props.setUpdate} />)
  const doneLists = done.map(list => <List key={list.id} list={list} delete={props.delete} change={props.change} update={props.setUpdate} />)

  return (
    <>
      <div className="active">
        <h2>Lista zakupów: </h2>
        {activeLists.length > 0 ? activeLists : <p>Brak listy zakupów! </p>}
      </div>

      <hr />

      <div className="done">
        <h2>Gotowa lista zakupów: </h2>
        {doneLists.slice(0, 6)}
        <br />
        <h2><em>Łącznie: ({done.length}) </em></h2>
      </div>
    </>
  );
}

export default TaskList;