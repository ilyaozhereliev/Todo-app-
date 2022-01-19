import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  ListGroup,
} from "react-bootstrap";

const Todo = (props) => {
  const { todo, todos, setTodos } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.task);

  const handleRemove = (id, e) => {
    e.stopPropagation();

    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const ToggleComplete = () => {
    if (todo.complete === false) {
      todo.complete = true;
    } else {
      todo.complete = false;
    }

    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const handleEditing = () => {
    setIsEditing(true);
  };

  const closeEditing = (e) => {
    if (e.keyCode === 27) {
      setIsEditing(false)
    }
  }

  const changeTodoText = (e) => {
    setValue(e.target.value)
  }

  const changeTodo = (e) => {
    e.preventDefault()
    if (value === '') {
     return handleRemove(todo.id, e)
    }
    const newTodo = {...todo, task: value}
    const newTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo
      } else {
        return todo
      }
    })
    
    setTodos(newTodos)
    setIsEditing(false)
  }

  const searchInput = useRef(null)

  useEffect(() => {
    searchInput.current?.focus()

  }, [isEditing])

  const renderBody = () => {
    if (!isEditing) {
      return (
        <div className="d-flex align-items-center space-between w-100">
          <ListGroup.Item
            className="rounded-3 d-flex"
            action
            variant={todo.complete ? "primary" : "light"}
            onClick={ToggleComplete}
            onDoubleClick={handleEditing}
          >
            {todo.task}
          </ListGroup.Item>
          
          <div className="buttons d-flex">
          <button
            type="button"
            className="shadow-none btn btn-outline-secondary me-1 ms-1"
            onClick={handleEditing}
          >
            edit
          </button>

          <button
            type="button"
            className="shadow-none btn btn-outline-danger"
            onClick={(e) => handleRemove(todo.id, e)}
          >
            &times;
          </button>
        </div>
      </div>
      );
    } else {
      return (
        <div className="d-flex align-items-center space-between w-100">
          <form 
            className="rounded-3 w-100 d-flex" 
            onSubmit={changeTodo} 
            onKeyDown={closeEditing}
          >
            <ListGroup.Item 
              style={{height: '40px'}} 
              className="d-flex align-items-center w-100">
              <Form.Control
                onChange={changeTodoText}
                value={value}
                className="border-0 shadow-none"
                type="text"
                placeholder="Edit your todo"
                ref={searchInput}
              />
            </ListGroup.Item>
          </form>
          
          <button
          type="button"
          className="shadow-none ms-1 btn btn-outline-success"
          onClick={changeTodo}
        >
          done
        </button>
      </div>
      );
    }
  };

  return (
    <ListGroup className="w-50">
      <div className="d-flex">{renderBody()}</div>
    </ListGroup>
  );
};

export default Todo;
