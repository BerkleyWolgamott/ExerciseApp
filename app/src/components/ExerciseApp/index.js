import DurationExercise from "../DurationExercise"
import RepetitionExercise from "../RepetitionExercise"
import RunningExercise from "../RunningExercise"
import { useState} from "react"

function ExerciseApp({data}) {
  let [currentMenu, setCurrentMenu] = useState(0)
  let [isMenuActive, setIsMenuActive] = useState(false)

  function getTypeOfExercise(item){
    switch(item.type){
      case "Running":
        return <RunningExercise exerciseName={item.exerciseName} exerciseDesc={item.exerciseDesc}/* exerciseImg={item.exerciseImg}*/></RunningExercise>
      case "Timed":
        return <DurationExercise exerciseName={item.exerciseName} exerciseDesc={item.exerciseDesc}/* exerciseImg={item.exerciseImg}*/></DurationExercise>
      case "Repetition":
        return <RepetitionExercise exerciseName={item.exerciseName} exerciseDesc={item.exerciseDesc}></RepetitionExercise>
      default:
        return <p></p>
    }
  }

  return (
    <div className="App">
      <hl>Welcome to Workouts!</hl>
      <hl>Exercise Circuits!</hl>
      <div>
        {isMenuActive ?
        currentMenu
        :data.map(item=>
          <hl><button onClick={()=>{
              setCurrentMenu(
                <p>
                <hl>{getTypeOfExercise(item) }</hl>
                <hl><button onClick={()=>{
                  setIsMenuActive(false)
                }}>Return</button></hl>
                </p>
              )
              setIsMenuActive(true)
            }
          }>{item.exerciseName}</button></hl>
        )}
      </div>
    </div>
  )
}
export default ExerciseApp