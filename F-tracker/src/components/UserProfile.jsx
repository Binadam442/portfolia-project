import React from "react";
import { Link } from "react-router-dom";


function Userprofile(){
 return (
            <div className="App">
                <header className="header">
                    <h1>Fitness Tracker App</h1>
                    <p>Your fitness journey starts here</p>
                </header>
    
                <section className="about">
                    <div className="container">
                        <h2>About the App</h2>
                        <p>
                            the Fitness Tracker App is designed to help you track 
                            and improve your fitness journey.
                            Monitor your steps, calories burned, workouts, heart rate,and more
                        </p>
    
                        <h2>Key Features</h2>
                        <div className="features">
                            <div className="feature">
                            <h3>Step Tracker</h3>
                            <p>Track your daily steps and set goals to stay motivated.</p>
                        </div>
                        <div className="feature">
                            <h3>Heart Rate Monitoring</h3>
                            <p>
                                keep an eye on your heart rate to ensure a safe and effective workout.
                            </p>
                        </div>
                        <div className="feature">
                            <h3>Workout Tracking</h3>
                            <p>
                                Log your workouts and track your progress over time.
                            </p>
                        </div>
                    </div>
                    <h2>Technologies Used</h2>
                    <p>
                        The Fitness Tracker App is built using cutting-edge tecnologies for a seamless
                        experience:
                    </p>
                    
                    <Link to="/Tracker"className="cta-button">Go to Fitness Tracker</Link>
                    </div>
                    </section>
    
                    <footer>
                        <p>&copy; 2024 Fitness Tracker App. ALL rights reserved</p>
                    </footer>
            </div>
    
        
        );    
    };
    
export default Userprofile;