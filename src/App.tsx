import React from 'react';
import './App.scss';
// import music from './assets/Faal.mp3';
import { Player } from './components';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Player />
            </header>
        </div>
    );
}

export default App;
