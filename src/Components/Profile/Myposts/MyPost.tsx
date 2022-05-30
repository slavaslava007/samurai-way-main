import React from 'react';
import s from './MyPost.module.css';
import {Post} from "./post/Post";
import {PropsPostDateType} from "../../../redux/state";

type PropsPostDate = {
    post: Array<PropsPostDateType>
    addPost: (postMessage: string) => void

}


export const MyPost = (props: PropsPostDate) => {


    let postMap = props.post.map(p => <Post name={p.message} like={p.like}/>)

    let newPostElement= React.createRef<HTMLTextAreaElement>()

    let addPost=()=>{

        let text= newPostElement.current!.value;
        props.addPost(text)
        newPostElement.current!.value=''

    }

    return (
        <div className={s.mypost}>
            <h3>My post</h3>
            <textarea ref={newPostElement}></textarea>
            <div><button onClick={addPost}>add post</button></div>
            <div className={s.post}>{postMap}</div>
        </div>
    );
};

