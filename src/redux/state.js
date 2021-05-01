import { rerenderEntireTree } from "../render.js";


let state = {
    DialogPage: {
        dialogs: [
            { id: "/Anton", name: "Anton", ava: "https://clck.ru/UNMiH" },
            { id: "/Diman", name: "Diman", ava: "https://clck.ru/UNMiX" },
            { id: "/Max", name: "Max", ava: "https://clck.ru/UNMio" },
            { id: "/Travov", name: "Travov", ava: "https://clck.ru/UNMjL" },
            { id: "/Vova", name: "Vova", ava: "https://clck.ru/UNMjL" },
        ],
    }, 

    ProfilePage: {
        posts: [
            { message: "How are you?", likes_count: 123 },
            { message: "Hello, world!", likes_count: 23 },
            { message: "Stay like!", likes_count: 20000 },
            { message: "What are you doing here? -_-", likes_count: 0 },
            { message: "Goood", likes_count: 23 },
        ],
        newPostText: '',
    },

    Nav : [
        {to: "/profile", navName : "Profile"},
        {to: "/friends", navName : "Friends"},
        {to: "/dialogs", navName : "Messages"},
        {to: "/news", navName : "News"},
        {to: "/music", navName : "Music"},
        {to: "/settings", navName : "Settings"},
    ],
};


window.state=state;

export let addPost = () =>{
    let post = {
        message: state.ProfilePage.newPostText,
        likes_count: 0,
    };  

    state.ProfilePage.newPostText = "";

    state.ProfilePage.posts.push(post);

    rerenderEntireTree(state);
};


export let updatePostText = (newPostText) => {
    state.ProfilePage.newPostText = newPostText;
    rerenderEntireTree(state);
};

export default state;