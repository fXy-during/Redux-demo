
import React from 'react';
import './hello.less';
import CounterWrap from './Counter';

import { Provider } from 'react-redux';


// CounterWrap();

import { createStore } from 'redux';
import HelloRedux from '../containers/Hello';


import configureStore from '../store/configureStore';
const store = configureStore();


//Redux Org 

// import App from '../fxy/App';
// import todoApp from '../fxy/reducers';

// let store = createStore(todoApp,[{text:'test',completed:false}],window.devToolsExtension ? window.devToolsExtension() : undefined);

class Hello extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <HelloRedux/>
            </Provider>
        )
    }
}

export default Hello;


// <Provider store={store}>
//                 <HelloRedux/>
//             </Provider> 