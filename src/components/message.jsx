import React, { Component } from 'react';
class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visible: 0
        };
     }
    
   clickHandler = e =>
    {
       // e.preventDefault();
        this.setState({
          visible: !this.state.visible
        });
    };
    
    render() {
        return (
            <React.Fragment>
              <a href="#" onClick={this.clickHandler}>
                Want to buy a new car?
              </a>
              {this.state.visible && <p>Call +11 22 33 44 now!</p>}
            </React.Fragment>
          );
        }
}
 
export default Message;