import React from 'react';
import s from './Post.module.css';

type PropsName={
    name:string
    like:number
}

export const Post = (props:PropsName) => {

    return (
                        <div>
                    <div className={s.post}>
                        <img src='https://cdn.icon-icons.com/icons2/2389/PNG/512/react_logo_icon_144942.png'/>
                       { props.name}
                   <div><span>like</span> {props.like}</div>
                    </div>

                </div>

    );
};

