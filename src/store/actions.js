import { UPDATE_LOGIN_STATE, UPDATE_SORT } from "../api/constants";


export const updateSort = payload => ({
    type:UPDATE_SORT,
    payload
})

export const updateLoginState = payload => ({
    type:UPDATE_LOGIN_STATE,
    payload
})
