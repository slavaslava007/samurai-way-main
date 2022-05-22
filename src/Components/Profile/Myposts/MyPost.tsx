import React from 'react';
//import s from './MyPost.module.css';
import {Post} from "./post/Post";



export const MyPost = () => {

    return (
        <div>
            <div >My post
                <div>
                    <input/><button>add post</button>
                    NEW POST
                </div>
             <Post name='Hi, how are you?' like={6}/>
             <Post name='Hi, how arejfyjfj you?' like={9}/>
            </div>
        </div>
    );
};

