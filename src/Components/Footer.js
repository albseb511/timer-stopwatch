import React, {Component} from 'react';

export default class Footer extends Component{
  render(){
    return (
        <div className="footer">
                
        {!this.props.runningState?(<button onClick = {this.props.handleStart} className="btn">Start</button>):(<button onClick = {this.props.handleStop} className="btn">Stop</button>)}
        
        <button onClick={this.props.handleReset} className="btn">Reset</button>
    </div>
  );
}
}
