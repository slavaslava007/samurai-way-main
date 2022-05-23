import React from 'react';
import s from './MyPost.module.css';
import {Post} from "./post/Post";

type PostProps={
    id:number
    name:string
    like:number
}

export const MyPost = (props:PostProps) => {

    let postData=[
        {id:1,name:'Hi, how are you?', like:6},
        {id:1,name:'Hi, how are you?', like:6}
    ]

    return (
        <div className={s.mypost}>
            <div>My post<div>
                  <div><input/></div>
                <div className={s.post}><button>add post</button></div>
                   NEW POST
                </div>
                <Post name={postData[0].name} like={postData[0].like}/>
                <Post name={postData[0].name} like={postData[0].like}/>
            </div>
        </div>
    );
};

