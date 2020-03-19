import axios from 'axios';


export const GET_DATA= 'GET_DATA';
export const UPDATE_JOKES = 'UPDATE_JOKES';
export const SET_ERROR= 'SET_ERROR';

export const getData = () => dispatch =>{
    dispatch({ type: GET_DATA})

    axios
        .get('http://api.icndb.com/jokes/random')
        .then(res => {
            console.log('this is the axios call resposne', res);
            dispatch({type: UPDATE_JOKES, payload: res.data.value.joke })
        })
        .catch(err=>{
            dispatch({ type: SET_ERROR, payload: err})
        })
}