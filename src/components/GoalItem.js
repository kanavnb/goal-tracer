import React from "react";

function GoalItem({ goal, onUpdateProgress, onDeleteGoal }) {
    const handleProgressChange = (e) => {
        const progress = Math.min(Math.max(parseInt(e.target.value, 10), 0), 100);
        onUpdateProgress(goal.id, progress);
    };

    return (
        <div style={{ marginBottom: "1rem" }}>
            <h3>{goal.title}</h3>
            <input
                type="number"
                value={goal.progress}
                onChange={handleProgressChange}
                min="0"
                max="100"
            />
            <span> {goal.progress}%</span>
            <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
        </div>
    );
}

export default GoalItem;
