import {GET_DATA, UPDATE_JOKES, SET_ERROR } from '../actions';


const intialState ={
    jokes:[],
    isGettingData: false,
    error: ''

}

export const jokeReducer = (state = intialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return{
                ...state, 
                isGettingData: true,
                jokes: []
            } 
            case UPDATE_JOKES:
                return{
                    ...state,
                    jokes: action.payload,
                    isGettingDta: false
                }
            case SET_ERROR:
                return{
                    ...state,
                    error: action.payload,
                    isGettingData: false
                }
                default:
                    return state;
    }
}