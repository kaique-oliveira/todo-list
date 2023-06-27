import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";

import styles from './FormTask.module.css';

export interface PropCreateTask{  
    onCreateNewTask: (description: string) => void;
}

export interface PropTask{
    description: string;
}

export function FormTask({ onCreateNewTask } : PropCreateTask) {
    const [task, setTask] = useState<string>('');

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();

        onCreateNewTask!(task);
        setTask('');
    }

    function handleNewCreateChange(event : ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setTask(event.target.value);

    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('Este campo é obrigatório!');
      }
    

    return (
        <form className={styles.formTask} onSubmit={handleCreateNewTask}>
            <div className={styles.content}>
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa'
                    value={task}
                    required
                    onChange={handleNewCreateChange}
                    onInvalid={handleNewCommentInvalid}
                />
                <button>Criar <PlusCircle size={16} weight="bold"/></button>
            </div>
        </form>
      
    )
  }
  