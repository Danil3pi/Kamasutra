import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let navReducer = () => ([
    { to: "/profile", navName: "Profile" },
    { to: "/friends", navName: "Friends" },
    { to: "/dialogs", navName: "Messages" },
    { to: "/news", navName: "News" },
    { to: "/music", navName: "Music" },
    { to: "/settings", navName: "Settings" },
])

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    Nav: navReducer,
});


let store = createStore(reducers); //Создание хранилища

export default store;
