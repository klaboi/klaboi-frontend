import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from '../src/components/Project/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();