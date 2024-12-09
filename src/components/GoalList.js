import React from "react";
import GoalItem from "./GoalItem";

function GoalList({ goals, onUpdateProgress, onDeleteGoal }) {
    return (
        <div>
            {goals.map((goal) => (
                <GoalItem
                    key={goal.id}
                    goal={goal}
                    onUpdateProgress={onUpdateProgress}
                    onDeleteGoal={onDeleteGoal}
                />
            ))}
        </div>
    );
}

export default GoalList;
