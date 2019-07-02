import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import Menu from './pages/home';




ReactDOM.render(
    <BrowserRouter>
    <Menu />
    </BrowserRouter>,
    document.getElementById('root')
  );