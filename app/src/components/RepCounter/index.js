import { useState, useEffect} from "react"

function RepCounter(){
  let [currentReps, setCurrentReps] = useState(0)
  useEffect(()=>{
      return () => setCurrentReps(0)
    }, [setCurrentReps] 
  )

  return <p>
    <p>Rep Count: {currentReps}</p>
    <p><button onClick={()=>
      {
        setCurrentReps(currentReps+1)
      }
    }>Complete Rep</button></p>
    <p><button onClick={()=>
      {
        setCurrentReps(0)
      }
    }>Reset</button></p>
  </p>
}
export default RepCounter