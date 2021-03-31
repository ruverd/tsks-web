import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../services/api';

interface ITask {
  id: number;
  title: string;
  description: string;
  status: boolean;
  created_at: string;
}

type TTaskInput = Omit<ITask, 'id' | 'status' |'created_at'>;

interface ITasksProviderProps {
  children: ReactNode;
}

interface ITaskContextData {
  tasks: ITask[];
  idSelected: number | null;
  taskInfo: ITask;
  saveTask: (task: TTaskInput) => Promise<void>;
  toogleStatusTask: (taskId: number) => Promise<void>;
  setIdSelected: (taskId: number | null) => void;
}

export const TasksContext = createContext<ITaskContextData>(
  {} as ITaskContextData
);

export function TasksProvider({ children }: ITasksProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [idSelected, setIdSelected] = useState<number | null>(null);
  const [taskInfo, setTaskInfo] = useState<ITask>({} as ITask);

  useEffect(() => {
    api.get('tasks')
      .then(response => setTasks(response.data));
  }, []);

  useEffect(() => {
    if(idSelected) {
      api.get(`tasks/${idSelected}`)
         .then(response => setTaskInfo(response.data));
    } else {
      setTaskInfo({} as ITask);
    }
  }, [idSelected]);

  async function saveTask(task: TTaskInput){
    if(idSelected){
      let response = await api.put(`tasks/${idSelected}`, { 
        title: task.title,
        description: task.description,
      });
  
      const newTask = {
        ...response.data
      };

      setTasks(
        tasks.map(t => t.id === idSelected ? newTask : {...t})
      );
    } else {
      const response = await api.post('tasks', { 
        ...task
      });
  
      const newTask = {
        ...response.data,
        status: true
      }
  
      setTasks([
        newTask,
        ...tasks
      ]);
    }
    
  }

  async function toogleStatusTask(taskId: number){
    const response = await api.put(`tasks/${taskId}/status`);
    
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return response.data;
      }

      return task;
    });

    setTasks([...newTasks]);
  }

  

  return (
    <TasksContext.Provider value={{tasks, idSelected, taskInfo, saveTask, toogleStatusTask, setIdSelected}}>
      {children}
    </TasksContext.Provider> 
  )
}