import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom';
import reportWebVitals from '../src/components/Project/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();