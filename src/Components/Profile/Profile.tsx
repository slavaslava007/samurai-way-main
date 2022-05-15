import React from 'react';
import c from './Profile.module.css'
import {MyPost} from "./Myposts/MyPost";


export const Profile = () => {
    return (

                <div >
                    <div><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/></div>
                    <div>ava +discription</div>
                    <MyPost/>
                </div>


    );
};

