import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoList from './Todos/TodoList'
class App extends React.Component {
  state = {  }
  render() { 
    return ( 
   <TodoList items={this.items}
    onItemClick={(item, event) => { console.log(item, event) }}
  />);
  }
}
 
export default App;




