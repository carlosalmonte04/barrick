import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import uiReducer from './reducers/uiReducer'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(uiReducer, applyMiddleware(thunk))

ReactDOM.render(<Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, 
  document.getElementById('root'));
// registerServiceWorker();
