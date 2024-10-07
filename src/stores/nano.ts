// usersStore.ts
import { atom } from "nanostores";
import type { User, Task } from "../Types/types";

// Définit le type des tâches

// Crée un store atomique contenant un tableau d'utilisateurs
export const users = atom<User[]>([
  {
    id: 1,
    name: "Alice",
    tasks: [
      { taskId: 1, title: "Task A", completed: false },
      { taskId: 2, title: "Task B", completed: true },
    ],
  },
  {
    id: 2,
    name: "Bob",
    tasks: [{ taskId: 3, title: "Task C", completed: false }],
  },
]);

export const addUser = (user: User) => {
  console.log('addUser',user);
  users.set([...users.get(), user]);
}

// Fonction pour ajouter une tâche à un utilisateur spécifique
// export const addTaskToUser = (userId: number, task: Task) => {
//   users.set(
//     users
//       .get()
//       .map((user) =>
//         user.id === userId ? { ...user, tasks: [...user.tasks, task] } : user
//       )
//   );
// };

// Fonction pour marquer une tâche comme terminée
// export const completeTask = (userId: number, taskId: number) => {
//   users.set(
//     users.get().map((user) =>
//       user.id === userId
//         ? {
//             ...user,
//             tasks: user.tasks.map((task) =>
//               task.taskId === taskId ? { ...task, completed: true } : task
//             ),
//           }
//         : user
//     )
//   );
// };
