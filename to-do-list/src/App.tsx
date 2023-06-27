import { useState } from 'react';
import { Header } from './components/Header';
import { InfoToDo } from './components/InfoToDo';
import { FormTask, PropTask } from './components/FormTask';
import { ToDoEmpty } from './components/ToDoEmpty';
import { Task } from './components/Task';

import styles from './App.module.css'
import './global.css';

function App() {

  const [listTasks, setListTasks] = useState<PropTask[]>([]);

  function CreateNewTask(description: string){
    setListTasks([...listTasks, { description }]);
  }

  function DeleteTask(description : string){
    const TasksWithoutDeleteOne = listTasks.filter(task => {
      return task.description != description;
    });

    setListTasks(TasksWithoutDeleteOne);
  }

  return (
    <div>
      <Header />
      <FormTask onCreateNewTask={CreateNewTask}/>

      <div className={styles.wrapper}>
        <main className={styles.task}>
          <InfoToDo
            listTasks={listTasks}
          />
          <div className={listTasks.length ? styles.isListTask : styles.noListTask}>
           {listTasks.length ?
            listTasks.map(task => (
              <Task 
                key={task.description} 
                description={task.description}
                onDeleteTask={DeleteTask}
              />
            )) : <ToDoEmpty/> }  
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
