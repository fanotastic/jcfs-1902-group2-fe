import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { rootReducers } from './redux/reducers';

const globalStore = createStore(rootReducers, {}, applyMiddleware(ReduxThunk))

ReactDOM.render(
  <Provider store={globalStore}>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
