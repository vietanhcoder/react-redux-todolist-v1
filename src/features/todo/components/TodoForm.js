import React, { useState } from "react";
import Button from "../../../components/Button";

const TodoForm = props => {
  const [value, setValue] = useState("");
  const [valueDes, setValueDes] = useState("")

  return (
    <>
      <div className="form-group">
      <input
          type="text"
          className="form-control"
          name="title"
          id="itemInput"
          onChange={event => setValue(event.target.value)}
          value={value}
        ></input>
        <input
          type="text"
          className="form-control"
          name="des-title"
          id="itemInput"
          onChange={event => setValueDes(event.target.value)}
          value={valueDes}
          placeholder="description"
        ></input>
        <div className="buttonContainer">
          <Button
            bgColor="btn-primary"
            nameBtn="Add Todo"
            handleClick={() => props.handleAddItemTodo(value, valueDes)}
          />
          <Button
            bgColor="btn-danger"
            nameBtn="Clear Todo"
            handleClick={props.handleClearTodo}
          />
        </div>
      </div>
      
    </>
  );
};
export default TodoForm;

