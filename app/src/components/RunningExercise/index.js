import React from "react"
export default class RunningExercise extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      runTimes: [],
      currentTime: 0,
      timer: 0
    } 
  }
  
  componentDidMount() {
    clearInterval(this.state.timer)
    this.setState({
      currentTime: 0
    })
    return () => clearInterval(this.state.timer)
  }

  getTimes(){
    return this.state.runTimes.map(value => <p>{String(Math.floor(value/(60*100))).padStart(2,'0')}:{String(Math.floor(value/100)%60).padStart(2,'0')}:{String(Math.floor(value)%100).padStart(2, '0')}</p>)
  }
  
  render() {
    return (
      <div class="DurationExercise">
        <h1>{this.props.exerciseName}</h1>
        <h1>Timed</h1>
        <h1>{this.props.exerciseDesc}</h1>
        <div class="Timer">
          <ul>
            <p>Timer {String(Math.floor(this.state.currentTime/(60*100))).padStart(2,'0')}:{String(Math.floor(this.state.currentTime/100)%60).padStart(2,'0')}:{String(Math.floor(this.state.currentTime)%100).padStart(2, '0')}</p>
            <p><button onClick={()=>
              {
                this.setState({
                  timer: setInterval(()=>{
                  this.setState(
                    {
                      currentTime: this.state.currentTime+1
                    }
                    ) 
                  }, 1)
                //setIsRunning(true)
              })
            }
            }>Start Timer</button></p>
            <p><button onClick={()=>
              {
                clearInterval(this.state.timer)
                //setIsRunning(false)
              }
            }>Stop</button></p>
            <p><button onClick={()=>
              {
                clearInterval(this.state.timer)
                this.setState({
                  currentTime: 0
                })
                //setIsRunning(false)
              }
            }>Reset</button></p>
            <p><button onClick={()=>
              {
                this.setState(
                  {
                    runTimes: [...this.state.runTimes, this.state.currentTime]
                  }
                )
              }
            }>Save Time</button></p>
            <p>{this.getTimes()}</p>
          </ul>
        </div>
      </div>
    )
  }
}
