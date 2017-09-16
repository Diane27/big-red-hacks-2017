import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
//router uses the example from https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(( 
<BrowserRouter>
    <App />
</BrowserRouter>), 
    document.getElementById('root'));
registerServiceWorker();
