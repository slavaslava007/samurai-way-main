import React from 'react';
import c from './Profile.module.css'
import {MyPost} from "./Myposts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = () => {
    return (
        <div >
            <ProfileInfo/>
            <MyPost />
        </div>
    );
};

