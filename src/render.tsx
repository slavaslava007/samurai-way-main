import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {BrowserRouter} from "react-router-dom";

import {StateTypeProps} from "./redux/state";






export let rerenderAll = (state:StateTypeProps)=> {

    ReactDOM.render(
        <BrowserRouter>

            <App state={state} addPost={addPost}/>
        </BrowserRouter>
        , document.getElementById('root')
    );

}

//rerenderAll( )
