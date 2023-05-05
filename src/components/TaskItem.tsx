import React, { useState } from 'react';
import styles from '@/styles/TaskList.module.css';
import { Task } from '../models/models';

interface props {
  task: Task;
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>;
}

const TaskItem = ({ task, tasks, setTasks }: props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<Task>(task);

  const handleDone = (id?: number) => {
    !task.isDone &&
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, isDone: !task.isDone } : task
        )
      );
  };

  const handleDelete = (id?: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id?: number) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title: editTask.title, desp: editTask.desp }
          : task
      )
    );
    setEdit(false);
  };

  return (
    <div className={styles.task}>
      <form className={styles.form} onSubmit={(e) => handleEdit(e, task.id)}>
        <h3
          className={`${styles.title} ${task.isDone && styles.strikeThrough}`}
        >
          {edit ? (
            <input
              className={styles.editInput}
              value={editTask.title}
              name='title'
              onChange={(e) =>
                setEditTask({
                  ...editTask,
                  [e.target.name]: e.target.value,
                })
              }
            />
          ) : (
            task.title
          )}
        </h3>
        <div className={styles.desp}>
          {edit ? (
            <textarea
              className={styles.editTextArea}
              value={editTask.desp}
              name='desp'
              onChange={(e) =>
                setEditTask({ ...editTask, [e.target.name]: e.target.value })
              }
            />
          ) : (
            task.desp
          )}
        </div>
        {edit && (
          <button className={styles.editBtn} type='submit'>
            Edit
          </button>
        )}
        {edit && (
          <button
            className={styles.editBtn}
            style={{ marginLeft: '1rem' }}
            onClick={() => setEdit(!edit)}
          >
            Cancel
          </button>
        )}
      </form>

      <div className={`${styles.icons} ${edit && styles.hide}`}>
        <svg
          className={`${styles.icon} ${task.isDone && styles.done}`}
          onClick={() => handleDone(task.id)}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path
            d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'
            fill='currentColor'
          />
        </svg>
        <svg
          className={styles.icon}
          onClick={() => {
            if (!edit && !task.isDone) {
              setEdit(!edit);
            }
          }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path d='M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z' />
        </svg>
        <svg
          className={styles.icon}
          onClick={() => handleDelete(task.id)}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path
            d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'
            stroke='#707070'
          />
        </svg>
      </div>
    </div>
  );
};

export default TaskItem;
