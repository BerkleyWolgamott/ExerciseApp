import { useState, useEffect } from "react"

let timer = 0

function Timer(){
  let [currentTime, setCurrentTime] = useState(0)
  //let [isRunning, setIsRunning] = useState(false)
  useEffect(()=>{
      //timer = setInterval(()=>setCurrentTime(prev => prev+1), 1)
      clearInterval(timer)
      setCurrentTime(0)
      return () => clearInterval(timer)
    }, [setCurrentTime]
  )

  return <p>
    <p>Timer {String(Math.floor(currentTime/(60*100))).padStart(2,'0')}:{String(Math.floor(currentTime/100)%60).padStart(2,'0')}:{String(Math.floor(currentTime)%100).padStart(2, '0')}</p>
    <p><button onClick={()=>
      {
        timer = setInterval(()=>setCurrentTime(prev => prev+1), 1)
        //setIsRunning(true)
      }
    }>Start Timer</button></p>
    <p><button onClick={()=>
      {
        clearInterval(timer)
        //setIsRunning(false)
      }
    }>Stop</button></p>
    <p><button onClick={()=>
      {
        clearInterval(timer)
        setCurrentTime(0)
        //setIsRunning(false)
      }
    }>Reset</button></p>
    </p>
}
export default Timer