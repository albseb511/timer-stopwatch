import React, {Component} from 'react';
import Footer from './Footer'

export default class Timer extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
            runningState:false,
            value:0,
            reset:true,
            sec:0,
            min:0,
            hour:0,
            int:'',
        };
      }

    handleStart = () => {
        if(this.state.value>0)
        {
            this.handleToggle()
            console.log('handle start called')
            this.state.int=setInterval(()=>this.handleInterval(),1000)
            setTimeout(()=>this.setState({reset: false}),1000)
        }
        else
        console.log('value is 0')
   
    }

    handleInterval = () => {
        if(this.state.value===0)
            this.handleStop()
        this.setValue(1)
    }

    setValue = (t) => {
        this.setState({
            value: this.state.value-t,
            sec: this.state.value%60,
            min: Math.floor(this.state.value/60),
            hour: Math.floor(this.state.value/3600)
        })
    }
    

    handleToggle = () =>{
        this.setState({runningState:!this.state.runningState})
        console.log('toggle called')
    }

    handleReset = () => {
        if(this.state.runningState||this.state.val)
            this.handleStop()
        this.setState({value:0})
        this.setState({reset: true})
        console.log('handle Reset called')
    }

    handleStop = ()=>{
        this.handleToggle()
        clearInterval(this.state.int)
        console.log('handle stop called')


    }
    
      
  render(){
    return (
    <div  className="body">
            <div className="hText">
            {this.state.reset?(<input type="number" className="input" 
                    onChange={e=>{this.setState({value:e.target.value})}} 
                    value={`${this.state.value}`} />):
                    (
                        <div className="inputHMS" >
                            {this.state.hour} {'h '}
                            {this.state.min} {'m '}
                            {this.state.sec} {'s '}
                        </div>
                    )
            }    
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

