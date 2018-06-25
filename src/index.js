import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import './styles/index.css';
import App from './components/App';
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
