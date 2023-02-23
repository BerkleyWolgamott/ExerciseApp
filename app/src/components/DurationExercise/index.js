

import React from "react"
import Timer from "../Timer"
export default class DurationExercise extends React.Component {
  render() {
    return (
      <div class="DurationExercise">
        <h1>{this.props.exerciseName}</h1>
        <h1>Timed</h1>
        <h1>{this.props.exerciseDesc}</h1>
        <div class="Timer">
          <ul><Timer></Timer></ul>
        </div>
      </div>
      )
    }
  }
