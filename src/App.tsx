import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {Nav} from "./Components/Nav/Nav";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import c from "./Components/Profile/Profile.module.css";


function App() {
    return (
        <div className="App">


            <Header/>
            <Nav/>
            <div className='App-wrapper-content'>
                <Dialogs/>
            </div>

            {/*<Profile/>*/}


        </div>
    );
}

export default App;
