import React from 'react'

function TodoList({todos}) {

    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    <input className="form-check-input me-1" type="checkbox" defaultChecked={todo.completed}/>
                    <label className="form-check-label">User {todo.userId} - {todo.title}</label>
                </li>
            ))}
        </ul>
    )
}

export default TodoList