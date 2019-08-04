import React, {Component} from 'react';

export default class Header extends Component{
  render(){
    return (
   <div className="hText">
       <button className="hBtn" onClick={this.props.func}>{this.props.label}</button>
    </div>
  );
}
}
