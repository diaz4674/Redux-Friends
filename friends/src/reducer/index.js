import {
    LOGIN_START,
    LOGIN_SUCCESS,
    FETCH_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,

} from '../actions';
  
  const initialState = {
    fetchingFriends: false,
    friends: [],
    isLoggingIn: false,
    isFetching: false,
    error: null
  };
  
const initialstate ={

    // deletingFriend: false,
    fetchingFriends: false,

    friend: [
   ],
    loggingIn: false,
    isfetching:false,
    // savingFriends: false,
    // updatingFriend: false,
    error: null

};

const reducer = (state = initialstate, action) =>{

switch (action.type){
    case LOGIN_START:
    return{
      ...state,
      err: '',
      fetchingFriends: true
    }
    case LOGIN_SUCCESS:
    return{
      ...state,
      err: '',
      isfetching: false,
    }
     case FETCH_START:
     return{
         ...state,
         err: '',
         fetchingFriends: true,
     }
     case FETCH_DATA_SUCCESS:
     return{
         ...state,
         loggingIn: true,
         fetchingFriends: false,
         friend: action.payload
     }
     case FETCH_DATA_FAILURE:
     return{
         ...state,
         loggingIn:false,
         isfetching: false,
         err: 'ooops'
     }
    default:
      return state;
    }
}

export default reducer;