import axios from "axios";
import {UserActionType} from "../action-types";
import {Action} from "../actions";
import {Dispatch} from "redux";

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}


export interface IUserAuth {
    email: string,
    password: string
}

export const signUpUser = (user: IUser) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: UserActionType.REGISTER_REQUEST
        })

        try {
            const {data} = await axios.post('http://localhost:3001/api/users/register', user);

            localStorage.setItem('access_token',data.accessToken);

            dispatch({
                type: UserActionType.REGISTER_SUCCESS,
                payload: data.accessToken
            })

        } catch (e: any) {
            dispatch({
                type: UserActionType.REGISTER_FAILURE,
                payload: e.message
            })
        }
    }
}

export const loginUser = (user: IUserAuth) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: UserActionType.LOGIN_REQUEST
        })

        try {
            const {data} = await axios.post('http://localhost:3001/api/users/auth', user);

            localStorage.setItem('access_token',data.accessToken);

            dispatch({
                type: UserActionType.REGISTER_SUCCESS,
                payload: data.accessToken
            })

        } catch (e: any) {
            dispatch({
                type: UserActionType.REGISTER_FAILURE,
                payload: e.message
            })
        }
    }
}