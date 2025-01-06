import React, { useState } from 'react';


function Tracker() {
// state for fitness data
const [stepCount, setStepCount] = useState(0);
const [caloriesBurned, setCaloriesBurned] = useState(0);
const [heartRate, setHeartRate] = useState(0);

// Simulate fetching fitness data
const updateFitnessData = () => {
  //Example of updated data
  setStepCount(stepCount + 100); // increase step count by 100
  setCaloriesBurned(caloriesBurned + 10); //increase calories by 10
  setHeartRate(heartRate + 5); // increase heart rate by 5 bpm
};

return (
  
  <div className="App">
    <header className="App-header">
      <h1>Fitness Tracker</h1>
    </header>

    <main>
      <div className="card">
        <h2>Step Count</h2>
        <p>{stepCount} steps</p>
      </div>

      <div className="card">
        <h2>Calories Burned</h2>
        <p>{caloriesBurned} kcal</p>

      </div>

      <div className="card">
        <h2>Heart Rate</h2>
        <p>{heartRate} bpm</p>
      </div>

      <button onClick={updateFitnessData}>Updae Data</button>
    </main>

  </div>

   
);
};

export default Tracker;
