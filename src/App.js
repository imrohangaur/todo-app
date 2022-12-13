import './App.css';
import { useState, useEffect } from "react";
import Loading from './components/Loading';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json));
    
  }, [])

  const onAdd = async(userId, title, completed) => {
    await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        title: title,
        completed: completed=="true"?true : false,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        if(res.status != 201) {
          return
        }else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setTodos((todos) => [...todos, data]);
      })
      .catch((err) => console.log(err))
  }
  
  const onDelete = async(id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if(res.status != 200) {
          return
        }else {
          setTodos(todos.filter((todo) => {
            return todo.id != id;
          }))
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      {todos ? (
        <div style={{ padding: 16, width: '70%' }}>
          {/* <button style={{ marginBottom: 16 }} onClick={onAdd}>Add</button> */}
          <AddTodo onAdd={onAdd} />
          <ul className="list-group">
            {todos.map((todo) => (
              <TodoList id={todo.id} key={todo.id} userId={todo.userId} completed={todo.completed} title={todo.title} onDelete={onDelete} />
            ))}
          </ul>    
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
