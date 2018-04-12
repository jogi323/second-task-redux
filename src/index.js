import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import Store from "./Store/Store";
import App from './app';

const root = document.getElementById("root");
ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    root
);
