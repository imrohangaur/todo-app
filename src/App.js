import './App.css';
import { useState, useEffect } from "react";
import Loading from './components/Loading';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json));
    
  }, [])
  

  return (
    <div>
      {todos ? (
        <div style={{ padding: 16 }}>
          <TodoList todos={todos} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
