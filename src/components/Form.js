import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const Form = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");

  const onChangeText = (e) => {
    setValue(e.target.value);
  };

  const createToDo = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      return;
    }

    const todo = {
      id: Math.floor(Math.random() * 1000),
      task: value,
      complete: false,
    };

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    setValue("");
  };

  return (
    <form
      onSubmit={createToDo}
      className="sticky-top bg-body d-flex mt-3 justify-content-center"
    >
      <InputGroup className="mb-3 w-50">
        <FormControl
          className="shadow-none"
          placeholder="Type your todo"
          aria-label="Type your todo"
          aria-describedby="basic-addon2"
          onChange={onChangeText}
          value={value}
        />
        <Button
          className="shadow-none"
          type="submit"
          variant="outline-primary"
          id="button-addon2"
        >
          Add
        </Button>
      </InputGroup>
    </form>
  );
};

export default Form;
