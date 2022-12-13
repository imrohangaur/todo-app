import React from 'react'

function AddTodo({onAdd}) {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.userId.value, e.target.title.value, e.target.completed.value);
        document.getElementById('addform').reset();
    }
  return (
    <div style={{ paddingBottom: '7px' }}>
        <h3>Add Todo</h3>
        <form style={{ display: 'flex' }} onSubmit={handleOnSubmit} id="addform">
            <div>
                <input placeholder='UserId' name='userId' type="number" />
            </div>
            <div>
                <input placeholder='Title' name='title' />
            </div>
            <div style={{ paddingLeft: '7px' }}>
                <p>Completed:</p>
                <input type="radio" id="yes" name="completed" value="true" />
                <label for="yes">YES</label><br />
                <input type="radio" id="no" name="completed" value="false" />
                <label for="no">NO</label><br />
            </div>
            <div>
                <button type='submit' style={{ marginLeft: '17vw' }}>ADD</button>
            </div>
        </form>
    </div>
  )
}

export default AddTodo