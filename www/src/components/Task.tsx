import { Check, Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';
import { useState } from 'react';
import { PropTask } from './FormTask';


interface PropCardTask extends PropTask{
    onDeleteTask: (description: string) => void;
}

export function Task({ description, onDeleteTask }: PropCardTask){
    const [isChecked, setIsChecked] = useState(false);

    function handleDeleteTask(){
        onDeleteTask(description)
    }

  return (
    <div className={styles.task}>
        <div className={styles.TaskWarapper}>
            <div className={styles.containerCheck}>
                <button 
                    className={isChecked ? styles.buttonIsChecked :styles.buttonNoChecked}
                    onClick={() => setIsChecked(!isChecked)}
                >
                    {isChecked && <Check size={15}/>}
                </button>
            </div>
            <div className={styles.containerContent}>
                <p className={isChecked ? styles.contentTextIsChecked : styles.contentTextNoChecked }>
                    {description}
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

