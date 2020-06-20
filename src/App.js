import React from 'react';
import TodoList from './todoList';

class App extends React.Component {
  render() {
    const list = ["買い物", "勉強"];

    return (
      <div>
        <h1>ToDoアプリ</h1>
        <TodoList list={list} />
      </div>
    );
  }
}

export default App;
