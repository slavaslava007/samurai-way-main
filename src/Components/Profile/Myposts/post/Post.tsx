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
                        <img src='https://www.adobe.com/express/create/media_1fca2fb37ab14f94480f729e54e352ecf06979a42.jpeg?width=400&format=jpeg&optimize=medium'/>
                       { props.name}
                   <div><span>like</span> {props.like}</div>
                    </div>

                </div>

    );
};

