// import React from 'react';
import {createStore} from 'redux';

// let {subscibe, dispatch, getState} = createStore(reducer);

//1.计算规则
export default function(){
    function counter(state = 0, action){
      switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
        }
    }

//2.根据计算规则生成 store
    let store = createStore(counter);

//3.定义数据(即state)变化之后的派发规则
    store.subscribe(() => {
        console.log('fn1 -> current state', store.getState());
    })
    
//4. 触发数据变化
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'DECREMENT'});


}
