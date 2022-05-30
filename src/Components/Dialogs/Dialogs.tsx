import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogDataPropsType, MessagePropsType} from "../../redux/state";


type DialogsPropsType={
    dialogs:Array<DialogDataPropsType>
    messages:Array<MessagePropsType>
}




export const Dialogs = (props:DialogsPropsType) => {

    let messageDataElements = props.messages.map(message => <Message
        message={message.message}/>)
    let dialogsMapElements = props.dialogs.map(dialog => <DialogItem
        name={dialog.name} id={dialog.id}/>)

        return (<div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogsMapElements}
            </div>
            <div className={s.item}>
                {messageDataElements}
            </div>
        </div>
    );
};

