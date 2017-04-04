import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRouter from './Router'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

const reducers = {
    form: reduxFormReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <MyRouter  ></MyRouter>
    </Provider>,

  document.getElementById('root')
);

