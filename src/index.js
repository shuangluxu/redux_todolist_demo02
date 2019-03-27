import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import App from "./mail/containers/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)