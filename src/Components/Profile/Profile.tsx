import React from 'react';
import c from './Profile.module.css'
import {MyPost} from "./Myposts/MyPost";


export const Profile = () => {
    return (

                <div >
                    <div><img src='https://m-dekor.by/catalog/2366/main.webp'/></div>
                    <div>ava +discription</div>
                    <MyPost/>
                </div>


    );
};

