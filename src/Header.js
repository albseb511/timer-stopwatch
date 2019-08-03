import React, {Component} from 'react';

export default class Header extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
         
        };
      }

      
  render(){
    return (
   <div className="hText">
       <button className="hBtn" onClick={this.props.func}>{this.props.label}</button>
    </div>
  );
}
}
