import React from "react";
import { connect } from "react-redux";

// Import CSS
import "./css/todoStyle.css";

// Components
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// Import actions
import { addTodo, ToggleTodo, removeTodo} from "./redux/actions";

const Todo = ({todos, addTodo, ToggleTodo, removeTodo}) => {

  const _handleAddItemTodo = (value, valueDes) => {
    if(value!==""){
      addTodo(value, valueDes)
    }
  };

  const _handleClearTodo = (id) => {

  };

  const _handleCompleteTodo = (id) => {
    ToggleTodo(id)
  };

  const _handleDeleteTodo = (id) => {
    removeTodo(id)
  };
  return (
    <>
      <h1>This is Todo page</h1>
      <div className="container">
        <TodoForm
          handleAddItemTodo={_handleAddItemTodo}
          handleClearTodo={_handleClearTodo}


        />
        <TodoList
          todos={todos}
          completedTodo={(id) => _handleCompleteTodo(id)}
          deleteTodo={(id) => _handleDeleteTodo(id)}
        />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const {
    todoReducers:{ todos, loading }
  } = state;
  
  return{
    todos,
    loading    
  }
}

const mapDispatchToProps={
  addTodo,
  ToggleTodo,
  removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
