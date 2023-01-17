import {Action} from "../actions";
import {UserActionType} from "../action-types";

interface UserState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (state: UserState = initialState,
                 action: Action):
    UserState => {
    switch (action.type) {
        case UserActionType.REGISTER_REQUEST:
            return {loading: true, error: null, data: []}
        case UserActionType.REGISTER_SUCCESS:
            return {loading: false, error: null, data: action.payload}
        case UserActionType.REGISTER_FAILURE:
            return {loading: false, error: action.payload, data: []}
        case UserActionType.LOGIN_REQUEST:
            return {loading: true, error: null, data: []}
        case UserActionType.LOGIN_SUCCESS:
            return {loading: false, error: null, data: action.payload}
        case UserActionType.LOGIN_FAILURE:
            return {loading: false, error: action.payload, data: []}
        default:
            return state;
    }
};


export default reducer;