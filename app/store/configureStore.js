import { createStore }  from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState={}) {
    const store = createStore(rootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined );
    console.log('store:', store);
    console.log('rootReducer:', rootReducer);
    return store;
}