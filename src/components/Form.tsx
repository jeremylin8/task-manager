import React from 'react';
import styles from '@/styles/Form.module.css';
import { Task } from '../models/models';

interface props {
  task: Task;
  setTask: React.Dispatch<React.SetStateAction<Task>>;
  addTask: (e: React.FormEvent) => void;
}

const Form = ({ task, setTask, addTask }: props) => {
  const { title, desp } = task;
  return (
    <form className={styles.form} onSubmit={(e) => addTask(e)}>
      <input
        className={styles.input}
        type='text'
        placeholder='Create a task...'
        value={title}
        name='title'
        onChange={(e) => setTask({ ...task, [e.target.name]: e.target.value })}
      />
      <textarea
        className={styles.textArea}
        placeholder='Add description...'
        value={desp}
        name='desp'
        onChange={(e) => setTask({ ...task, [e.target.name]: e.target.value })}
      />
      <button
        className={styles.submitBtn}
        style={{ cursor: title && 'pointer' }}
        type='submit'
      >
        Add
      </button>
    </form>
  );
};

export default Form;
