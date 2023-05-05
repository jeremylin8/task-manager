import React, { useState } from 'react';
import Form from '../components/Form';
import TaskList from '../components/TaskList';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import { Task } from '../models/models';

const Home: React.FC = () => {
  const [task, setTask] = useState<Task>({
    title: '',
    desp: '',
  });
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.title) {
      setTasks([...tasks, { id: Date.now(), ...task, isDone: false }]);
      setTask({ title: '', desp: '' });
    }
  };

  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name='description' content='Task Manager' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.center}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Task Manager</h1>
          <Form task={task} setTask={setTask} addTask={addTask} />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </main>
    </>
  );
};

export default Home;
