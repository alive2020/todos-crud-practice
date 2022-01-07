import axios, { Axios } from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import NewTodo from '../components/NewTodo';
import TodoList from '../components/TodoList';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(10);

  useEffect(() => {
    let todosData = [];
    const loadTodos = async () => {
      const response = await Axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setTodos(response.data);
    };
    loadTodos();
    console.log('todos', todos);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>My TODOS</h1>
        <button onClick={() => isModalOpen(true)}>New TODO</button>
        {isModalOpen && <NewTodo setIsModalOpen={setIsModalOpen} />}
        <div>
          <TodoList todos={todos} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
