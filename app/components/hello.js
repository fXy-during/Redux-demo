
import React from 'react';
import './hello.less';
import CounterWrap from './Counter';

import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';

// CounterWrap();

import HelloRedux from '../containers/Hello';


const store = configureStore();


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