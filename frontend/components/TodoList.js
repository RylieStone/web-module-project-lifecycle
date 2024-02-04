import React from 'react'
import Todo from './Todo'
export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return <Todo todo={todo} key={todo.id} completer={this.props.complete}/>
        })}
      </div>

    )
  }
}
