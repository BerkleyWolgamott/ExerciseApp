import './App.css';
import ExerciseApp from "./components/ExerciseApp"

function App() {
  let exerciseData = [
    {
      //exerciseImg: "Push Up Image here"
      exerciseName : "Push Ups",
      type : "Repetition",
      exerciseDesc: "Begin by holdinmg a plank position with your palms directly beneath your shoulders. Keep your back straight and your head up as you use your body weight to push up and down."
    },
    {
      //exerciseImg2: "Plank Image here"
      exerciseName : "Planks",
      type : "Timed",
      exerciseDesc: "Begin by holding yourself up, back straight and head up. Keep the position until workout is complete"
    },
    {
      //exerciseImg3: "Running Image Here"
      exerciseName : "Running",
      type : "Running",
      exerciseDesc: "Make sure to pace your breathing as you begin to run"
    }
  ]
  return (
    <div className="App">
        <ExerciseApp data={exerciseData}></ExerciseApp>
    </div>
  );
}

export default App;
