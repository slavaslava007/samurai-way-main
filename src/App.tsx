import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {Nav} from "./Components/Nav/Nav";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {addMessage, StateTypeProps, updateNewMessageText, updateNewPostText} from './redux/state';
import {addPost} from './redux/state';


type AllProps = {
    state: StateTypeProps,
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (t: string) => void
}


function App(props: AllProps) {
    const {dialogsPage, profilePage, sidebar} = props.state
    return (
        <div className="App">
            <Header/>
            <Nav sidebar={sidebar}/>
            <div className='App-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs
                        dialogs={dialogsPage.dialogData}
                        message={dialogsPage.messageData}
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}
                        newMessageText={dialogsPage.newMessageText}
                    />}/>
                <Route path='/profile' render={() =>
                    <Profile posts={profilePage.postData}
                             addPost={props.addPost}
                             updateNewPostText={props.updateNewPostText}
                             newPostText={profilePage.newPostText}
                    />}
                />
            </div>
        </div>

    );
}

export default App;
