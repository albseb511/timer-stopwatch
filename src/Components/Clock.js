import React from 'react';
import './Clock.css';
import Header from './Header'
import StopWatch from './StopWatch'
import Timer from './Timer'

class Clock extends React.Component {
    constructor(props){
        super(props)
      this.state = {
            headerLeft: 'body-normal',
            headerRight:'body-none',
      }
    }

    funcTest = (a) =>{
        console.log('test called from child',a)
        !a?
        this.setState({headerLeft:'body-normal',headerRight:'body-none'}):
        this.setState({headerLeft:'body-none',headerRight:'body-normal'})
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
                  <Header  func={()=>this.funcTest(false)} label="Timer"/>
                  <Header  func={()=>this.funcTest(true)} label="Stop Watch"/>
              </div>
              <div>
                  
                <Timer display={this.state.headerLeft}/>
                <StopWatch display={this.state.headerRight}/>
                  
              </div>


        </div>
      )
    }
    }


export default Clock;

