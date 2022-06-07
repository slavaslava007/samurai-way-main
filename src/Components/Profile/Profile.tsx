import React from 'react';
import c from './Profile.module.css'
import {MyPost} from "./Myposts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PropsPostDateType} from "../../redux/state";


type PropsPostDate = {
    posts: Array<PropsPostDateType>
    addPost: () => void
    updateNewPostText: (postMessage: string) => void
    newPostText: string

}


export const Profile = (props: PropsPostDate) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost post={props.posts}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                    newPostText={props.newPostText}
            />
        </div>
    );
};

