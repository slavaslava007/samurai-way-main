let rerenderAll= (state: StateTypeProps)=>{
    console.log('State change')
}

export type MessagePropsType = {
    message: string
    id: number
}
export type SideBarType =    {
        id: number
        name: string
    }
export type PropsPostDateType = {
    id: number
    message: string
    like: number
}


export type PropsPostDate = {
    postData: Array<PropsPostDateType>
}
export type DialogPropsType = {
    dialogData: Array<DialogDataPropsType>
}
export type MessagesPropsType = {
    messageData: Array<DialogDataPropsType>
}
export type DialogDataPropsType = {
    name: string
    id: number
}
export type StateTypeProps = {
    profilePage: {
        postData: Array<PropsPostDateType>
        newPostText:string

    }
    dialogsPage: {
        dialogData: Array<DialogDataPropsType>
        messageData: Array<MessagePropsType>
        newMessageText:string
    }
    sidebar: Array<SideBarType>

}





export let state:StateTypeProps = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', like: 0},
            {id: 1, message: 'Hi', like: 6}
        ],
        newPostText:''
    },
    dialogsPage: {
        dialogData: [
            {id: 1, name: 'Kolya'},
            {id: 2, name: 'Ironshik'},
            {id: 3, name: 'Irishka'},
            {id: 4, name: 'Im'}
        ],
        messageData: [
            {id: 1, message: 'How are you?'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Hello'},
            {id: 4, message: 'Im'}],
            newMessageText:''
    },
    sidebar: [{id: 1, name: 'Kolya'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Ivan'},

    ]
}

export let addPost = ()=>{

    let newPost={
        id: 5,
        message: state.profilePage.newPostText,
        like: 0
    }
    state.profilePage.postData.unshift(newPost)
    state.profilePage.newPostText= ('')

    rerenderAll(state);
}

export let addMessage =()=>{
    let newMessage={
        id:5,
        message:state.dialogsPage.newMessageText
    }

    state.dialogsPage.messageData.push(newMessage)
    state.dialogsPage.newMessageText=' '


    rerenderAll( state);
}

export let updateNewPostText = (newText: string)=>{

    state.profilePage.newPostText=newText;
    rerenderAll(state);

}

export let updateNewMessageText = (t: string)=>{

    state.dialogsPage.newMessageText=t;
    rerenderAll(state);
}

export const subscribe = (observer:any) => {
    rerenderAll=observer
}










