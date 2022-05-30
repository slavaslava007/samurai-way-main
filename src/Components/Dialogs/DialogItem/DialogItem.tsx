import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'
import {DialogDataPropsType} from "../../../redux/state";

type DialogDataType = DialogDataPropsType

export const DialogItem = (props: DialogDataType) => {
    return (<div className={s.dia}><NavLink to={'/dialogs/'+ props.id}>
        {props.name}</NavLink></div>)
}

