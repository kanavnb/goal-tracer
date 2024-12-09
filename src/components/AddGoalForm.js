import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddGoalForm({ onAddGoal }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        onAddGoal({ id: uuidv4(), title, progress: 0 });
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your goal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add Goal</button>
        </form>
    );
}

export default AddGoalForm;
