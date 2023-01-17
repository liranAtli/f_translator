import {UserActionType} from "../action-types";

interface UserRegisterAction {
    type: UserActionType.REGISTER_REQUEST;
}

interface UserRegisterSuccessAction {
    type: UserActionType.REGISTER_SUCCESS;
    payload: string[];
}

interface SUserRegisterErrorAction {
    type: UserActionType.REGISTER_FAILURE;
    payload: string;
}

interface UserLoginAction {
    type: UserActionType.LOGIN_REQUEST;
}

interface UserLoginSuccessAction {
    type: UserActionType.LOGIN_SUCCESS;
    payload: string[];
}

interface SUserLoginErrorAction {
    type: UserActionType.LOGIN_FAILURE;
    payload: string;
}


export type Action =
    | UserRegisterAction
    | UserRegisterSuccessAction
    | SUserRegisterErrorAction
    | UserLoginAction
    | UserLoginSuccessAction
    | SUserLoginErrorAction;
