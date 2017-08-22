
import React from 'react';
import './hello.less';
import CounterWrap from './Counter';

import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';

// CounterWrap();

import HelloRedux from '../containers/Hello';


const store = configureStore();

import App from '../ReduxOrg/App';

class Hello extends React.Component{
    render(){
        return(
            <App/>
        )
    }
}

export default Hello;


// <Provider store={store}>
//                 <HelloRedux/>
//             </Provider> 