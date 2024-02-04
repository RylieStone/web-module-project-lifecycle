import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          <placeholder>insert Todo: </placeholder>
          <br />
          <input type='text' placeholder='Type a todo here' onChange={(evt) => this.props.onChange(evt)} value={this.props.value}/>
          <button type='submit'>Submit</button>
        </form>
        <button onClick={() => this.props.filterchanger()}>{this.props.filter ? 'Show Completed' : 'Hide completed'}</button>
      </div>

    )
  }
}
