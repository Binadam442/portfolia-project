import React from "react";
import { Link } from "react-router-dom";
import TrackerFeatureiteam from "../component/TrackerFeatureiteam";


function HomePage() {
    return (
        <div>
            <div className="App">
                <header className="header">
                    <h1>Fitness Tracker </h1>

                </header>

                <img src="/watch.jpg" alt="HomePage" width={200} />
                <p>Your fitness journey starts here</p>


                <h2 style={{marginTop:50}}>Key Features</h2>
                <div className="features-section"> 

                
                <div className="features">
                    <TrackerFeatureiteam title="Step Tracker" description="Track your daily steps and set goals to stay motivated." />
                    <TrackerFeatureiteam title="Heart Rate Monitoring" description="keep an eye on your heart rate to ensure a safe and effective workout." />
                    <TrackerFeatureiteam title="Workout Tracking" description="Log your workouts and track your progress over time." />
                </div>
                </div>

            
            </div>



        </div >


    );
};

export default HomePage;