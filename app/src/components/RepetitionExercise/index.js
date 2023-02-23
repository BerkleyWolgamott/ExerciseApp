

import React from "react"
import RepCounter from "../RepCounter"
export default class RepetitionExercise extends React.Component {
  render() {
    return (
      <div class="DurationExercise">
        <h1>{this.props.exerciseName}</h1>
        <h1>Repped</h1>
        <h1>{this.props.exerciseDesc}</h1>
        <div class="Timer">
        <ul><RepCounter></RepCounter></ul>
        </div>
      </div>
      )
    }
  }
