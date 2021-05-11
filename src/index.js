import React from 'react';
import ReactDOM from 'react-dom';



import store from './redux/redux-store.js';

import App from './App';
import { BrowserRouter } from 'react-router-dom';



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

//Вызывается самой первой
rerenderEntireTree(store.getState());

store.subscribe( () => {
    return rerenderEntireTree(store.getState());
});
