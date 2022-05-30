import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {Nav} from "./Components/Nav/Nav";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import { StateTypeProps} from './redux/state';
import { addPost} from './redux/state';


type AllProps = {
    state: StateTypeProps
}



function App(props: AllProps) {

    return (
        <div className="App">
            <Header/>
            <Nav sidebar={props.state.sidebar}/>
            <div className='App-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs messages={props.state.dialogsPage.messageData}
                             dialogs={props.state.dialogsPage.dialogData}/>}/>
                <Route path='/profile' render={() =>
                    <Profile posts={props.state.profilePage.postData}/>}/>

            </div>
        </div>

    );
}

export default App;
