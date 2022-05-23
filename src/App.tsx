import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {Nav} from "./Components/Nav/Nav";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import c from "./Components/Profile/Profile.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Setting} from "./Components/Setting/Setting";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <div className='App-wrapper-content'>
                    <Route  path='/dialogs' component={Dialogs}/>
                    <Route path='/profiles' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/setting' component={Setting}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
