import React from 'react';
import {Friend} from "./Friend/Friend";
import {SideBarType} from "../../../redux/state";



type FriendNameProps={
    sidebar:  Array<SideBarType>}


export const Friends = (props:FriendNameProps) => {

    let newFriend=props.sidebar.map(f=><Friend name={f.name}/>)

    return (
        <div >
            <div >Friends</div>
           <div>  {newFriend}    </div>
        </div>
    );
};

