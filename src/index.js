import React from 'react';
import  ReactDOM  from 'react-dom';
import store from './redux/redux.js';
import App from './App.js';
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux';

 const root=createRoot(document.getElementById('root'));
 root.render(<React.StrictMode>
     <Provider store={store}><App /></Provider></React.StrictMode>
     ,);