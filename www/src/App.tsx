import { useState } from 'react';
import { Header } from './components/Header';
import { InfoToDo } from './components/InfoToDo';
import { FormTask } from './components/FormTask';
import { ToDoEmpty } from './components/ToDoEmpty';
import { Itask, Task } from './components/Task';

import styles from './App.module.css'
import './global.css';

function App() {

  const [listTasks, setListTasks] = useState<Itask[]>([]);

  function createNewTask(descriptionTask: string){
    const newTask : Itask = {
      id: listTasks.length + 1,
      description: descriptionTask,
      isFinished: false,
      onDeleteTask: () => {},
      onChangeStatus: () => {}
    } 

    setListTasks([...listTasks, newTask]);
  }

  function deleteTask(taskId : number){
    const TasksWithoutDeleteOne = listTasks.filter(task => {
      return task.id != taskId;
  });

    setListTasks(TasksWithoutDeleteOne);
  }

  function changeStatus(changeTask: Itask){
    const newListTasks = listTasks.filter(task => {
      if(task.id == changeTask.id){
        task.isFinished = !changeTask.isFinished;
      }
      return task;
    });

    setListTasks(newListTasks);
  }

  return (
    <div>
      <Header />
      <FormTask onCreateNewTask={createNewTask}/>

      <div className={styles.wrapper}>
        <main className={styles.task}>
          <InfoToDo 
            numberTasksCreated={listTasks.length}
            numberTasksfinished={listTasks.filter(task => task.isFinished == true).length}
          />

          <div className={listTasks.length ? styles.isListTask : styles.noListTask}>
           {listTasks.length ?
            listTasks.map(task => (
              <Task 
                key={task.id} 
                id={task.id}
                description={task.description}
                isFinished={task.isFinished}
                onDeleteTask={deleteTask}
                onChangeStatus={changeStatus}
              />
            )) : <ToDoEmpty/> }  
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
