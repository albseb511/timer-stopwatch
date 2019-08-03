import React, {Component} from 'react';
import Footer from './Footer'

export default class StopWatch extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
            runningState:false,
            value:0,
            reset:true,
            ms:0,
            sec:0,
            min:0,
            hour:0,
            int:'',
        };
      }

 

    handleStart = () => {
            this.handleToggle()
            console.log('handle start called')
            this.state.int=setInterval(()=>this.handleInterval(),10)
            setTimeout(()=>this.setState({reset: false}),10)
   
    }

    handleInterval = () => {
        this.setValue(1)
        
    }


    setValue = (t) => {
        this.setState({
            value: this.state.value+t,
            ms: this.state.value%100,
            sec: Math.floor(this.state.value/100)%60,
            min: Math.floor(this.state.value/6000)%60,
            hour: Math.floor(this.state.value/360000)
        })
        
    }
    

    handleToggle = () =>{
        this.setState({runningState:!this.state.runningState})
        console.log('toggle called')
    }

    handleReset = () => {
        if(this.state.runningState)
            this.handleStop()
        this.setState({value:0,
                        reset:true,
                        sec:0,
                        min:0,
                        hour:0,
                        ms:0})
        console.log('handle Reset called')
    }

    handleStop = ()=>{
        this.handleToggle()
        clearInterval(this.state.int)
        console.log('handle stop called')


    }
    
      
  render(){
    return (
    <div className="body">
            <div className="hText">
                        <div className="inputHMS" >
                            {this.state.value>100*60*60?(this.state.hour + ' h '):''}
                            {this.state.value>100*60?(this.state.min + ' m '):''}
                            {this.state.value>100?(this.state.sec + ' s '):''}
                            {this.state.ms + ' ms '}
                        </div>
                </div>
            <div className="footer">
                <Footer handleStart = {this.handleStart} 
                        handleStop={this.handleStop} 
                        handleReset={this.handleReset}
                        runningState={this.state.runningState}/>
            </div>
    </div>
  );
}
}
