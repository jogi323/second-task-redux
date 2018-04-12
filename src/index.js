import React ,{Component} from 'react';
import {render} from 'react-dom';
import { Provider } from "react-redux";

import Store from "./store/Store";
import App from './app';

const root = document.getElementById("root");
render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    root
);
