import { useStore } from "@nanostores/react";
import { users } from "../stores/nano";

export default function Results() {
  const myUsers = useStore(users);
  console.log("Results");
  return (
    <div>
      Results
      {myUsers.map((elem) => (
        <div>
          <p>
            {elem.id} - {elem.name}
          </p>
          <ul>
            {elem &&
              elem.tasks &&
              elem.tasks.map((task, index) => (
                <li key={task.taskId}>
                  {task.taskId} - {task.title} - {task.completed}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
