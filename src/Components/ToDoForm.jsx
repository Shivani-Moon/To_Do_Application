import React, { useContext, useReducer, useState,  } from "react";
import {ToDoContext} from '../Context/ToDoContext'
import { useNavigate } from "react-router-dom";
import './Form.css'

const ToDoForm = () => {
    const [name,setName] = useState()
    const [description, setDescription] = useState()
    const {dispatch} = useContext(ToDoContext)

    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        try {
            console.log(name, description)
            const payload = {name:name,description:description}
            dispatch({type:'ADD_TODO',payload:payload})
            console.log(payload)
            navigate('/')
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div>
      <h1 className="text-center text-success ">
        <b>To Do Application</b>
      </h1>

      <h3 className="text-center mt-5">Create New To Do</h3>
      <form onSubmit={handleSubmit} className="card shadow-sm mb-4" id="form">
        <div className="card-body">
          <h5 className="card-title mb-3">Add a Task</h5>
          <div className="mb-3">
            <label className="form-label">Task Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Learn React"
              // value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              placeholder="Details about the task"
              rows={3}
              // value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary ms-5">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
