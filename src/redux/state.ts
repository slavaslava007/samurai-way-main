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
    }
    dialogsPage: {
        dialogData: Array<DialogDataPropsType>
        messageData: Array<MessagePropsType>
    }
    sidebar: Array<SideBarType>

}





export let state:StateTypeProps = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', like: 0},
            {id: 1, message: 'Hi', like: 6}
        ]
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
            {id: 4, message: 'Im'}]
    },
    sidebar: [{id: 1, name: 'Kolya'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Ivan'},

    ]
}

export let addPost = (postMessage: string)=>{
    debugger;
    let newPost={
        id: 5,
        message: postMessage,
        like: 0
    }

    state.profilePage.postData.push(newPost)
}

export default state





