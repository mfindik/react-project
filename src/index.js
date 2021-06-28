import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import { magzaYapilandirmasi } from './magza/magzaYapilandirmasi';
import "react-toastify/dist/ReactToastify.min.css"

const magza = magzaYapilandirmasi()
ReactDOM.render(
    <Provider store={magza}>
     <BrowserRouter>
        <App />
    </BrowserRouter>       
    </Provider>
, document.getElementById('root')
);

reportWebVitals();
