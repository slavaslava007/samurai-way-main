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
                        <img src='https://as2.ftcdn.net/v2/jpg/04/73/28/75/1000_F_473287546_dLiaGLOJ1rRr4H4NWoIz7l61qaK86kpu.jpg'/>
                       { props.name}
                   <div><span>like</span> {props.like}</div>
                    </div>

                </div>

    );
};

