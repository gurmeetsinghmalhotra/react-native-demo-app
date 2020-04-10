import { USER_FETCH_REQUEST_SENT, USER_FETCH_RECEIVED } from './../ActionTypes';

export default (state = {
    isFetching: false,
    // didInvalidate: false,
    users: []
}, action) => {
    switch (action.type) {
        //   case INVALIDATE_SUBREDDIT:
        //     return {
        //       ...state,
        //       didInvalidate: true
        //     }
        case USER_FETCH_REQUEST_SENT:
            return {
                ...state,
                isFetching: true,
                //   didInvalidate: false
            }
        case USER_FETCH_RECEIVED:
            return {
                ...state,
                isFetching: false,
                //   didInvalidate: false,
                users: action.users,
                //   lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}