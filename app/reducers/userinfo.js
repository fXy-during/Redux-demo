import * as actionTypes from '../constants/userinfo';

const initialState = {};

export default function userinfo(state = initialState, action){
    switch (action.type) {
        case actionTypes.USERIGHT_LOGIN:
            return action.data

        case actionTypes.UPDATE_CITYNAME:
            return action.data
            
        default: 
            return state
    }
}