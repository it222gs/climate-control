import React from 'react';
import MQTT from './Mqtt';
import Plot from './Plot';

function App() {
    return (
    <div className='main'>
        <div className='header'>
            <p>Climate Measurement D116 Dashboard</p>
        </div>
        <div className='main-page'>
            <MQTT />
            {/* <Plot /> */}
        </div>
        
    </div>
    );
}

export default App;