import React from 'react'

function TodoList({id, userId, completed, title, onDelete}) {

    const handleOnDelete = () => {
        onDelete(id);
    }

    return (
        <li className="list-group-item" key={id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <input className="form-check-input me-1" type="checkbox" defaultChecked={completed}/>
                <label className="form-check-label">User {userId} - {title}</label>
            </div>
            <span>
                <button onClick={handleOnDelete}>Delete</button>
            </span>
        </li>
    )
}

export default TodoList