 import React from 'react';
 import {connect} from 'react-redux';
 import { getData } from '../actions';


 const JokeForm = state => {
    return(
        <div>
           
           <h3 className='actualJoke'>{state.joke}</h3>
        
         
           <button className='getJokeBtn' onClick={state.getData}>Get Random Joke</button>
       
     </div>
    )
 }

 const mapStateToProps = state => {
    return{
        isGettingData: state.isGettingData,
        joke: state.jokes,
        error: state.error
    }
 }

 export default connect(mapStateToProps, {getData} ) (JokeForm);