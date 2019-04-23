import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const FETCH_START = 'FETCH_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


export const login = (creds) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
      .post("http://localhost:5000/api/friends", creds)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload  });
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err})
      })
  };



  export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_START })
      axios
        .get('http://localhost:5000/api/friends',
        { headers: { authorization: localStorage.getItem('token')}
        })
        .then(res => {
          console.log(res);
          dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: res.data
          })
        })
        .catch(err => {
          dispatch ({
            type: FETCH_DATA_FAILURE,
            payload: err
        })
      })
    };