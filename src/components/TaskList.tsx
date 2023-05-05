import React from 'react';
import TaskItem from './TaskItem';
import styles from '@/styles/TaskList.module.css';
import { Task } from '../models/models';

interface props {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>;
}

const TaskList = ({ tasks, setTasks }: props) => {
  return (
    <div className={styles.taskList}>
      {tasks?.map((task, i) => (
        <TaskItem task={task} tasks={tasks} setTasks={setTasks} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
