import React, { Component } from 'react';
class Input extends React.PureComponent 
{
     render()
      { 
         let {forwardedRef, ...otherProps} = this.props; 
         return <input {...otherProps} ref={forwardedRef} />;
      } 
}
const TextInput = React.forwardRef((props, ref) => { 
    return <Input {...props} forwardedRef={ref} />;
 });

class FocusableInput extends Component {

    ref = React.createRef();
    
    render() { return <TextInput ref={this.ref} />}
    componentDidUpdate(prevProps) {
        if(prevProps.focused !== this.props.focused && this.props.focused){
          this.ref.current.focus();
        }
      }
    
      componentDidMount() {
        if(this.props.focused){
          this.ref.current.focus();
        }
      }
    
    
    focus()
     { 
         if(this.props.focused && document.activeElement !== this.ref.current) 
         { this.ref.current.focus();
         } 
        } 
    }
    
    
    FocusableInput.defaultProps = { focused: false};



 export default Input;



 