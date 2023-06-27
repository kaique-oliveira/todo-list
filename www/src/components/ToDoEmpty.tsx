import clipboard from '../assets/clipboard.svg';

import styles from './ToDoEmpty.module.css';

export function ToDoEmpty() {
    return (
        <div className={styles.containerToDoEmpty}>
         <img src={clipboard} alt='Clipboard vázio'/>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div> 
    )
  }