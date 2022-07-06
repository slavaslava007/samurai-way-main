import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, subscribe, updateNewMessageText, updateNewPostText} from './redux/state';
import {addMessage } from './redux/state';
import {BrowserRouter} from "react-router-dom";
import {StateTypeProps} from "./redux/state";






let rerenderAll = (state:StateTypeProps)=> {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );

}

rerenderAll(state)

subscribe(rerenderAll)
