const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let store = {
    // Privat variable
    _state : {
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
    },

    getState(){
        return this._state;
    },

    _rerenderEntireTree(){
        debugger;
        console.log('I\'m _rerenderEntireTree');
    },

    publisher(observer){
        //А rerender становиться фунцией из index.js единожды? Или каждый раз вызывается при новой отрисовке?
        //console.log('publisher');
        this._rerenderEntireTree = observer;
    },

    dispatch(action){
        debugger;
        switch(action.type) {
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

        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostTextActionCreator = (newPostText) =>({type: UPDATE_POST_TEXT, newPostText});

window.store=store;


export default store;