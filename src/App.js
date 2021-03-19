import './App.scss';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList'
import {useState, useEffect} from 'react';

function App() {
const [inputText, setInputText] = useState('');
const [todos, setTodos] = useState([]);
const [status, setStatus] = useState('Wszystkie');
const [filteredTodos, setFilteredTodos] = useState([]);


const filterHandler = () => {
  switch (status) {
    case "Zrobione":
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
      break;
    case "Niezrobione":
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
};
const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocalTodos = () => {
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  }
};

useEffect(() => {
  getLocalTodos();
}, []);

useEffect(() => {
  filterHandler();
  saveLocalTodos();
}, [todos, status]);

  return (
    <div className="App">
        <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        />
        <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos ={filteredTodos}
        />
    </div>
  );
}

export default App;
