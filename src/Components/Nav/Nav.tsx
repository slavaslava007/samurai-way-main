import React from 'react';
import c from './Nav.module.css'
import {Dialogs} from "../Dialogs/Dialogs";
import { NavLink } from 'react-router-dom';
import {Friends} from "./Friends/Friends";
import {SideBarType} from "../../redux/state";

type FriendNames={
    sidebar: Array<SideBarType>}




export const Nav = (props:FriendNames) => {
    return (
        <div className={c.nav}>
                <div className={c.item}><NavLink to='/profile' activeClassName={c.activeLink}>Profiles</NavLink></div>
                <div className={`${c.active} ${c.item}`}><NavLink to='/dialogs' activeClassName={c.activeLink}>Message</NavLink></div>
                <div className={c.active}><NavLink to='/news'>News</NavLink></div>
                <div className={c.item}><NavLink to='/music'>Music</NavLink></div>
                <div className={c.item} ><NavLink to='/setting'>Setting</NavLink></div>
                <div className={c.item} ><Friends sidebar={props.sidebar}/></div>

        </div>
    );
};