import React from 'react';
import './App.css';
import RewardPoints from "components/RewardPoints";

function App() {
    return (
        <div className="App">
            <span>Refresh to generate new random records:</span>
            <h1>Reward points</h1>
            <RewardPoints/>
        </div>
    );
}

export default App;
