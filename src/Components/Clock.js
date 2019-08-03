import React from 'react';
import './Clock.css';
import Header from './Header'
import StopWatch from './StopWatch'
import Timer from './Timer'






class Clock extends React.Component {
    constructor(props){
        super(props)
      this.state = {
            headerLeft: true,
            stopWatchVal:0,
            timerVal:0
      }
    }

    funcTest = (a) =>{
        console.log('test called from child',a)
        !a?this.setState({headerLeft:true}):this.setState({headerLeft:false})
    }

    updateStopWatchVal =(a)=>{
        this.setState({stopWatchVal:a})
    }
    updateTimerVal =(a)=>{
        this.setState({timerVal:a})
    }

    render(){
        return (
      
          <div className="Container">
              <div className="header">
                  <Header  func={()=>this.funcTest(0)} label="Timer"/>
                  <Header  func={()=>this.funcTest(1)} label="Stop Watch"/>
              </div>
              <div>
                  
                  {this.state.headerLeft===true?( <Timer/>):
                                                (<StopWatch/>)}
                  
              </div>


        </div>
      )
    }
    }


export default Clock;

