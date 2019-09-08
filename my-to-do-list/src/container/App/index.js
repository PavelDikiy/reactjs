import React from 'react';
import ToDo from '../../components/ToDo';
import Profile from '../../components/Profile';
import Log from '../../components/Log';

function App() {
    return (
        <div className="App container">
            <div style={{display: "flex"}}>
                <div>
                    <Profile/>
                </div>
                <div style={{flex: 1, marginLeft: 30}}>
                    <ToDo/>
                </div>
                <Log />
            </div>
        </div>
    );
}

export default App;
