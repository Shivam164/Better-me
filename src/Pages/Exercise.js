import React, { useState } from "react";

export default function Exercise() {
  return (
    <div>
      <label htmlFor="muscle">Select the muscle you want to train</label>
      <select name="muscle" id="muscle" className="targetMuscle">
        <option value="abdominals">Abdominals</option>
        <option value="abductors">Abductors</option>
        <option value="biceps">Biceps</option>
        <option value="calves">Calves</option>
        <option value="chest">Chest</option>
        <option value="forearms">Forearms</option>
        <option value="glutes">Glutes</option>
        <option value="hamstrings">Hamstrings</option>
        <option value="lats">Lats</option>
        <option value="lower_back">Lower_back</option>
        <option value="middle_back">Middle_back</option>
        <option value="neck">Neck</option>
        <option value="quadriceps">Quadriceps</option>
        <option value="traps">Traps</option>
        <option value="triceps">Triceps</option>
      </select>
      {exercise && <div></div>}
    </div>
  );
}
