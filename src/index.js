import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app';

ReactDOM.render(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>,
    document.getElementById('root'),
);
