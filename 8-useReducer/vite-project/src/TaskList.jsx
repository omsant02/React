import Button from "./Button";

import "./TaskList.css";
const TaskList = ({ tasks, onDeleteTask, onChangeTask }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => {
                onChangeTask({ ...task, done: !task.done });
              }}
            />
            <span className={task.done ? "completed" : "not-completed"}>
              {task.text}
            </span>
            <Button onClick={() => onDeleteTask(task.id)}>Delete</Button>
          </li>
        );
      })}
    </ul>
  );
};
export default TaskList;
