import React from 'react'
import axios from 'axios'
import Form from './Form'
import TodoList from './TodoList'
const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      todo: '',
      filter: false
    }
  }
  getTodos = () => {
    axios.get(URL).then(res => this.setState({todos: res.data.data})).catch(err => console.log(err))
  }
  componentDidMount() {
    this.getTodos()
  }
  completion = (id) => {
    axios.patch(`${URL}/${id}`).then(() => this.getTodos()).catch(err => console.log(err))
  }
  
  
  onChange = evt => {
    this.setState({todo: evt.target.value})
  } 
  onSubmit = e => {
    e.preventDefault()
    axios.post(URL, {name: this.state.todo}).then(() => this.setState({todo: ''})).catch(err => console.log(err)).finally(() => this.getTodos())
  }
  filterChanger = () => {
    this.setState({filter: !this.state.filter})
  }

  render() {
    return (
      <div>
      {this.state.todos ? <TodoList todos={this.state.filter ? this.state.todos.filter(todo => todo.completed === false) : this.state.todos} complete={this.completion}/> : <div>Loading todos</div>}
      <Form submit={this.onSubmit} onChange={this.onChange} value={this.state.todo} filter={this.state.filter} filterchanger={this.filterChanger}/>
      </div>
    )
  }
}
