import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './types';

const initialState ={
  todos: [],
  loading : false,
}

const reducers = (state=initialState, action) => {
  switch (action.type){
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload] //array destructuring

      }
    }
    case TOGGLE_TODO:{
      return {
        ...state,
        todos: state.todos.map(item => {
          if(item.id === action.payload.id){
            item.isCompleted = !item.isCompleted;
          }
          return item;
        })
      }
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload.id)
      }
    }


    default:
      return state;
  }
}

export default reducers;