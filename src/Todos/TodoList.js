import React, { Component } from 'react';

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends Component {
    render() {
    const { items, onClick } = this.props;
    return (
      <ul onClick={onClick}>
        {items.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            onClick={this.handleItemClick.bind(this, item)}
          />
        ))}
      </ul>
    );
  }
    handleItemClick(item, event) {
      if(!item.done){
          return this.props.onItemClick(item,event);
      }
      event.preventDefault();
      event.stopPropagation();
      }
      
    
    }
  const items = [ 
      { text: 'Buy grocery', done: true },
      { text: 'Play guitar', done: false },
      { text: 'Romantic dinner', done: false }
  ];
  const App = (props) => <TodoList
    items={props.items}
    onItemClick={(item, event) => { console.log(item, event) }}
  />;

  export default TodoList;