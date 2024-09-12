import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Form from './components/Form.js';
import Header from './components/Header.js';
import TodoList from './components/TodoList.js';

function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')

    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  }) 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className='App'>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
