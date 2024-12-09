import React, { useState } from "react";
import GoalList from "./components/GoalList";
import AddGoalForm from "./components/AddGoalForm";

function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  const updateProgress = (id, progress) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, progress: progress } : goal
      )
    );
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <div>
      <h1>Goal Tracker</h1>
      <AddGoalForm onAddGoal={addGoal} />
      <GoalList
        goals={goals}
        onUpdateProgress={updateProgress}
        onDeleteGoal={deleteGoal}
      />
    </div>
  );
}

export default App;
