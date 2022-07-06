import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogDataPropsType, MessagePropsType} from "../../redux/state";


type DialogsPropsType = {
    dialogs: Array<DialogDataPropsType>
    message: Array<MessagePropsType>
    addMessage: () => void
    updateNewMessageText: (t: string) => void
    newMessageText:string
}


export const Dialogs = (props: DialogsPropsType) => {


    let dialogsMapElements = props.dialogs.map(dialog => <DialogItem
        name={dialog.name} id={dialog.id}/>)


    let addNewPostMessage = React.createRef<HTMLTextAreaElement>()

    let addMessages = () => {
        props.addMessage()
    }
    let onChange = () => {
        let t = addNewPostMessage.current!.value
        props.updateNewMessageText(t)
    }

    return (<div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogsMapElements}
            </div>
            <div className={s.item}>
                {props.message.map(m => <div key={m.id}>{m.message}</div>)}
            </div>
            <textarea onChange={onChange} ref={addNewPostMessage}
                      value={props.newMessageText} className={s.message}/>
            <button onClick={addMessages}>+</button>
        </div>
    );
};

