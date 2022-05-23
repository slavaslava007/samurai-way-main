import React from 'react';
import c from './Nav.module.css'
import {Dialogs} from "../Dialogs/Dialogs";
import { NavLink } from 'react-router-dom';


export const Nav = () => {
    return (
        <div className={c.nav}>
                <div className={c.item}><NavLink to='/profiles' activeClassName={c.activeLink}>Profiles</NavLink></div>
                <div className={`${c.active} ${c.item}`}><NavLink to='/dialogs' activeClassName={c.activeLink}>Message</NavLink></div>
                <div className={c.active}><NavLink to='/news'>News</NavLink></div>
                <div className={c.item}><NavLink to='/music'>Music</NavLink></div>
                <div className={c.item} ><NavLink to='/setting'>Setting</NavLink></div>
        </div>
    );
};