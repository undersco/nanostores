export interface Task {
  taskId: number;
  title: string;
  completed: boolean;
}

// Définit le type des utilisateurs
export interface User {
  id: number;
  name: string | undefined;
  tasks?: Task[];
}
