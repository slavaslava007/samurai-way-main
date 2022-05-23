import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'


type NavPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
    message: string
}

const DialogItem = (props: NavPropsType) => {
    return (<div className={s.dia}><NavLink to={'/dialogs/1' + '' + props.id}>{props.name}</NavLink></div>)}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>}

export const Dialogs = (props:NavPropsType) => {
    let dialogData = [
        {id:1,name:'Kolya'},
        {id:2,name:'Ironshik'},
        {id:3,name:'Irishka'},
        {id:4,name: 'Im'}
    ]

    let messageData = [
        {id:1,message:'How are you?'},
        {id:2,message: 'Hi'},
        {id:3,message:'Hello'},
        {id:4,message: 'Im'}
                        ]
     return (<div className={s.dialogs}>
            <div className={s.dialog}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>

            </div>
            <div className={s.item}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
            </div>
        </div>
    );
};

