const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const TYPING_NEW_MESSAGE = 'TYPING-NEW-MESSAGE';

let store = {
    // Privat variable
    _state: {
        //Тут разбил все данные на разные страницы
        DialogPage: {
            dialogs: [
                {
                    id: "Anton",
                    name: "Anton",
                    ava: "https://clck.ru/UNMiH",
                    messages: [
                        { text: 'Привет', type: 'incoming' },
                        { text: 'Привет)', type: 'answer' },
                        { text: 'Ты диману писал?', type: 'incoming' },
                        { text: 'нет', type: 'answer' },
                        { text: 'Ну ладно', type: 'incoming' },
                    ]
                },

                {
                    id: "Diman",
                    name: "Diman",
                    ava: "https://clck.ru/UNMiX",
                    messages: [
                        { text: 'САп, нига', type: 'incoming' },
                        { text: 'Привет, пес', type: 'answer' },
                        { text: 'Я от зизяя съеxал', type: 'incoming' },
                        { text: 'Наконец-то', type: 'answer' },
                        { text: 'Приезжай в пераом', type: 'incoming' },
                        { text: 'Я чо конч', type: 'answer' },
                        { text: 'Го в мордовию', type: 'answer' },
                        { text: 'Поеду заправлять', type: 'incoming' },
                    ]
                },

                {
                    id: "Max",
                    name: "Max",
                    ava: "https://clck.ru/UNMio",
                    messages: [
                        { text: 'Привет, Братишка!', type: 'incoming' },
                        { text: 'Привет, Брат!', type: 'answer' },
                        { text: 'Я мотоцикл купил)', type: 'incoming' },
                        { text: 'Приезжай, покатаемся', type: 'incoming' },
                        { text: 'Обязательно', type: 'answer' },
                        { text: 'В лес поедем', type: 'answer' },
                        { text: 'на Слияние', type: 'incoming' },
                    ]
                },
                { id: "Travov", name: "Travov", ava: "https://clck.ru/UNMjL", messages:[]},
                { id: "Vova", name: "Vova", ava: "https://clck.ru/UNMjL", messages:[] },
            ],
            contantMessage: '',
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

        Nav: [
            { to: "/profile", navName: "Profile" },
            { to: "/friends", navName: "Friends" },
            { to: "/dialogs", navName: "Messages" },
            { to: "/news", navName: "News" },
            { to: "/music", navName: "Music" },
            { to: "/settings", navName: "Settings" },
        ],
    },

    getState() {
        return this._state;
    },

    _rerenderEntireTree() {
    },

    publisher(observer) {
        //А rerender становиться фунцией из index.js единожды? Или каждый раз вызывается при новой отрисовке?
        //console.log('publisher');
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        //debugger;
        switch (action.type) {
            case ADD_POST: {
                if (this._state.ProfilePage.newPostText !== '') {
                    let post = {
                        message: this._state.ProfilePage.newPostText,
                        likes_count: 0,
                    };

                    this._state.ProfilePage.newPostText = "";

                    this._state.ProfilePage.posts.push(post);

                    this._rerenderEntireTree(this._state);
                }
            }; break;

            case UPDATE_POST_TEXT: {
                this._state.ProfilePage.newPostText = action.newPostText;
                this._rerenderEntireTree(this.getState());
            }; break;

            case SEND_MESSAGE: {
                debugger;
                let newMessage = {
                    text: this._state.DialogPage.contantMessage,
                    type: 'answer',
                };

                for (let friend of this._state.DialogPage.dialogs){
                    if(friend.id === action.friend){
                        friend.messages.push(newMessage);
                    }
                }

                this._state.DialogPage.contantMessage = '';
                this._rerenderEntireTree(this.getState());
            }; break;

            case TYPING_NEW_MESSAGE: {
                this._state.DialogPage.contantMessage = action.newTextMessage;

                this._rerenderEntireTree(this.getState());
            }; break;
        }
    },

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (newPostText) => ({ type: UPDATE_POST_TEXT, newPostText });
export const createActionTyping = (newTextMessage) => ({type: 'TYPING-NEW-MESSAGE', newTextMessage});
export const createActionSendingMessage = (friend) => ({type: 'SEND-MESSAGE', friend});

window.store = store;


export default store;