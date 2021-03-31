import { useTasks } from "../../hooks/useTasks";

import { Container, Button, Task, Checkbox, NoDataMessage } from "./styles";

import dotsImg from '../../assets/dots.svg';
import { useState } from "react";

export function TasksList(){
  const { tasks, toogleStatusTask, setIdSelected } = useTasks();
  const [status, setStatus] = useState(true);

  async function handleTaskStatus(taskId: number) {
    await toogleStatusTask(taskId);
  }

  return (
    <Container>
      <nav>
        <Button type="button" isActive={status} onClick={() => setStatus(true)}>
          To do
        </Button>
        <Button type="button" isActive={!status} onClick={() => setStatus(false)}> 
          Closed
        </Button>
      </nav>
      {
        tasks.some(task => task.status === status) ? 
          tasks.filter(task => task.status === status).map(task => (
            <Task key={task.id}>
              <header>
                <Checkbox>
                  {task.title}
                  <input type="checkbox" checked={!task.status} onChange={() => handleTaskStatus(task.id)} />
                  <span className="checkmark"></span>
                </Checkbox>
                <img src={dotsImg} alt="Options" onClick={() => setIdSelected(task.id)} />
              </header>
              <section>{task.description}</section>
              <footer>
                {`Created `}
                { new Intl
                  .DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' })
                  .format(new Date(task.created_at))}
              </footer>
            </Task>
          )) : 
          <NoDataMessage>No data</NoDataMessage>
      }
    </Container>
  ) 
}