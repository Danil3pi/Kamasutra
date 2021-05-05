import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import store from './redux/store.js';
import App from './App';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.publisher(rerenderEntireTree);
