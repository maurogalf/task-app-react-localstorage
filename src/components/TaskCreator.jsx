import { useState } from "react";

export const TaskCreator = ({ createTask }) => {
    const [newTaskName, setNewTaskName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(newTaskName);
        setNewTaskName("");
    };
    return (
        <form onSubmit={handleSubmit} className="my-2 row">
            <div className="col-9">
                <input
                    type="text"
                    placeholder="Enter a new task"
                    className="form-control"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                />
            </div>
            <div className="col-3">
                <button className="btn btn-sm btn-info">Save Task</button>
            </div>
        </form>
    );
};
