import React from 'react';
import c from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={c.nav}>

                <div className={c.item}><a href='/profiles'>Profiles</a></div>
                <div className={c.active}><a href='message'>Message</a></div>
                <div className={c.item}><a>News</a></div>
                <div className={c.item}><a>Music</a></div>
                <div ><a>Setting</a></div>


        </div>
    );
};

