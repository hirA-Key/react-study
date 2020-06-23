import React from 'react';
import TodoList from './todoList';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["買い物", "勉強"],
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      list: [
        ...this.state.list,
        this.state.value,
      ],
      value: '',
    });
  }

  render() {
    return (
      <div>
        <h1>ToDoアプリ</h1>
        <Form
          //入力値をstateで保持する
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default App;
