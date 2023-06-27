import { PropTask } from './FormTask';
import styles from './InfoToDo.module.css';

interface PropInfoToDo{
    listTasks: PropTask[];
}

export function InfoToDo({ listTasks } : PropInfoToDo){
  return (
    <header className={styles.containerInfoTasks}>
        <div className={styles.tasksCreated}>
            <p>Tarefas criadas</p>
            <div className={styles.counter}>
                <span>{listTasks.length}</span>
            </div>
        </div>
        <div className={styles.tasksCompleted}>
            <p>Concluídas</p>
            <div className={styles.counter}>
                <span>0</span>
            </div>
        </div>
    </header>
  )
}
