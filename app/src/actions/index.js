import axios from 'axios';


//need to declare my actions below so i can then create my reducers

export const GET_DATA= 'GET_DATA';
export const UPDATE_JOKES = 'UPDATE_JOKES';
export const SET_ERROR= 'SET_ERROR';

export const getData = () =>{
    dispatch({ type: GET_DATA})

    axios
        .get('http://api.icndb.com/jokes/random')
}