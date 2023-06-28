import { Check, Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';

export interface Itask{
    id: number;
    description: string;
    isFinished: boolean;
    onDeleteTask: (idTaks: number) => void;
    onChangeStatus: (task: Itask) => void;
}

export function Task( propTask: Itask){

    function handleDeleteTask(){
        propTask.onDeleteTask(propTask.id);
    }

    function onHandleIsOrNoFinished(){
        propTask.onChangeStatus(propTask);
    }

  return (
    <div className={styles.task}>
        <div className={styles.TaskWarapper}>
            <div className={styles.containerCheck}>
                <button 
                    className={ propTask.isFinished ? styles.buttonIsChecked :styles.buttonNoChecked}
                    onClick={ onHandleIsOrNoFinished }
                >
                    { propTask.isFinished && <Check size={15}/>}
                </button>
            </div>
            <div className={styles.containerContent}>
                <p className={ propTask.isFinished ? styles.contentTextIsChecked : styles.contentTextNoChecked }>
                    {propTask.description}
                </p>
            </div>
            <div className={styles.containerTrash}>
                <button onClick={handleDeleteTask}>
                    <Trash size={20}/>
                </button>
            </div>
        </div>
    </div>
  )
}

