import React from "react";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = { text: '', items: [] };
  }

  handleChange = ({target: { value }}) => this.setState({ text: value})


  render() {
    return (
      <div>
        <h2>TODO</h2>
        <form>
          <label htmlFor="newTodo">What needs to be done? </label>
          <br />
          <input 
          onChange={this.handleChange} 
          type="text"
          autoComplete="off"
          />
          <button>Add #1</button>
        </form>
        <TodoList items={this.state.items}/>
      </div>
    )
  }
}

export default TodoApp;