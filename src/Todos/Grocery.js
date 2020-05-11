import React from 'react';
var Product = props => {
   
    const plus = () => {
      // Call props.onVote to increase the vote count for this product
    props.onVote('+',props.index)
    };
        const minus = () => {
      // Call props.onVote to decrease the vote count for this product
      props.onVote('-',props.index)
    };
    return (
      <li>
        <span>{ props.name}</span> - <span>votes: {props.votes}</span>
        <button onClick={plus}>+</button>{" "}
        <button onClick={minus}>-</button>
      </li>
    );
  };
class GroceryApp extends React.Component {
    // Finish writing the GroceryApp class
    constructor(){
        super();
        this.state ={Product : this.props.Product}
    }
   onVote = (dir, index) => {
     // Update the products array accordingly ...
     const UpdateProduct =[...this.props.Product];
     if(dir==='+')
     {
         UpdateProduct[index].votes = UpdateProduct[index].votes+1;
     }
     else{
        UpdateProduct[index].votes = UpdateProduct[index].votes-1;
        this.setState({
            Product:UpdateProduct
        })
     }
   };
   render() {
     return (
       <ul>
         {this.state.Product.map((item,ind)=>{
             return <Product key={item.name} index={ind} 
             onVote={this.onVote} name ={item.name} votes ={item.votes} ></Product>
         })}
       </ul>
     );
   }
 }
  Product=[
    { name: "Oranges", votes: 0 },
    { name: "Apples", votes: 0 },
    { name: "Bananas", votes: 0 }
  ];

   export default GroceryApp