import * as actionType from '../constants/userinfo';


//actions 封装函数
export function login(data){
    return {
        type: actionType.USERINFO_LOGIN,
        data
    }
}


export function undateCityName(data) {
    return {
        type: actionType.UPDATE_CITYNAME,
        data
    }
}


