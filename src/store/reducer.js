import { ISLOGIN, last_edited, LOGIN_STATE, SORT, UPDATE_LOGIN_STATE, UPDATE_SORT } from "../api/constants";
const initState = {
    sort: window.localStorage.getItem(SORT) ?? last_edited,
    login_state : window.localStorage.getItem(ISLOGIN) && false
}

function reducer(state, action) {
    switch(action.type){
        case UPDATE_SORT:
            return{
                ...state,
                sort: action.payload
            }
        case UPDATE_LOGIN_STATE:
            return {
                ...state,
                login_state : action.payload
            }
        default:
            throw new Error("Action is wrong")
    }
}


export { initState };
export default reducer;