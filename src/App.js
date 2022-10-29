import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/ui/GlobalStyles';
import { lightTheme, darkTheme } from './components/ui/Themes';

import Layout from './components/layout/Layout';
import BackgroundImage from './components/ui/BackgroundImage';

import Header from './components/layout/Header';

import TodoList from './components/todo/TodoList';
import TodoRow from './components/todo/TodoRow';
import TodoFooter from './components/todo/TodoFooter';
import TodoBody from './components/todo/TodoBody';

import { fetchTodos } from './store/todoActions';

function App() {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);
  const [theme, setTheme] = useState('dark');

  console.log('todoState', todoState);

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  console.log(todoState);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BackgroundImage theme={theme} />
      <Layout>
        <Header theme={theme} themeToggler={themeToggler} />
        <TodoList>
          <TodoBody>
            {todoState.filteredTodos.map((todo, index) => (
              <TodoRow key={index} todo={todo} />
            ))}
          </TodoBody>
          <TodoFooter todosCount={todoState.todos.length}></TodoFooter>
        </TodoList>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
