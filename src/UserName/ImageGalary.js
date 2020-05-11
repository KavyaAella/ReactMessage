import React, { Component } from 'react';
class ImageGallery extends Component {
    
    constructor(props) {
        super(props);
        this.state =  { links: props.links };
        };
        
    render() { 
        return (
            <div>
              {this.props.links.map((item, index) => {
                return (
                  <div key={item} className="image">
                    <img key={index} src={item} alt="" />{" "}
                    <button className="remove" onClick={() => this.remove(item)}>
                      X
                    </button>
                  </div>
                );
              })}
            </div>
          );
  
      }
      remove = url => {
        this.setState(state => ({
          links: state.links.filter(l => l !== url)
        }));

    }
    
}
export default ImageGallery;