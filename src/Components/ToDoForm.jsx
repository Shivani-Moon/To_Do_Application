import React, { useContext, useState } from "react";
import { ToDoContext } from '../Context/ToDoContext';
import { useNavigate } from "react-router-dom";
import './Form.css';

const ToDoForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");

    const { dispatch } = useContext(ToDoContext);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        try {
            const payload = { name, description, priority };
            dispatch({ type: 'ADD_TODO', payload });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form-page">
            <h1 className="text-center text-success"><b>To Do Application</b></h1>

            <h3 className="text-center mt-4">Create New To Do</h3>

            <form onSubmit={handleSubmit} className="card shadow-sm mb-4" id="form">
                <div className="card-body">
                    <h5 className="card-title mb-3">Add a Task</h5>

                    <div className="mb-3">
                        <label className="form-label">Task Name <span className="required">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. Learn React Hooks"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <small className="form-text text-muted">Provide a clear and concise task title.</small>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            placeholder="Details about the task"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <small className="form-text text-muted">Add more details about the task (optional).</small>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Priority</label>
                        <select
                            className="form-select"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="High">High 🔴</option>
                            <option value="Medium">Medium 🟡</option>
                            <option value="Low">Low 🟢</option>
                        </select>
                        <small className="form-text text-muted">Select priority level for the task.</small>
                    </div>

                    <button type="submit" className="btn btn-primary form-btn">
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ToDoForm;
