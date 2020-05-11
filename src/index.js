import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import GroceryApp from './Todos/Grocery'
//import App1 from './UserName/App1';
import ImageGallery from './UserName/ImageGalary'
//import TodoList from './Todos/TodoList'
import * as serviceWorker from './serviceWorker';
//import App from './App';
const links = ["https://goo.gl/kjzfbE", "https://goo.gl/d2JncW"]; 


  ReactDOM.render(
  <React.StrictMode>     <ImageGallery links ={links} />
 </React.StrictMode>,
  document.getElementById('root'));


//ReactDOM.render(<GroceryApp /> , document.getElementById('root'))

// document.body.innerHTML = <div id={root}></div>;
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App items={items} />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
