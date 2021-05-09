import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
                { id: "Travov", name: "Travov", ava: "https://clck.ru/UNMjL", messages: [] },
                { id: "Vova", name: "Vova", ava: "https://clck.ru/UNMjL", messages: [] },
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

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.DialogPage = dialogsReducer(this._state.DialogPage, action);

        this._rerenderEntireTree(this.getState());
    },

};

window.store = store;


export default store;