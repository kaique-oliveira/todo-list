import styles from './InfoToDo.module.css';

interface PropsHeaderInfo{
  numberTasksCreated: number;
  numberTasksfinished: number;
}

export function InfoToDo(info : PropsHeaderInfo){
  return (
    <header className={styles.containerInfoTasks}>
        <div className={styles.tasksCreated}>
            <p>Tarefas criadas</p>
            <div className={styles.counter}>
                <span>{info.numberTasksCreated}</span>
            </div>
        </div>
        <div className={styles.tasksCompleted}>
            <p>Concluídas</p>
            <div className={styles.counter}>
                <span>{info.numberTasksfinished}</span>
            </div>
        </div>
    </header>
  )
}
