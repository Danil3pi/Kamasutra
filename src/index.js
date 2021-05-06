import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import store from './redux/store.js';
import allDialogs from './redux/AllDialogs';

import App from './App';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} dialogs={allDialogs}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.publisher(rerenderEntireTree);
