import React, { useEffect } from 'react';
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

import Spinner from './components/ui/Spinner';

import { uiActions } from './store/uiSlice';
import { fetchTodos } from './store/todoThunks';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);
  const uiState = useSelector((state) => state.ui);

  const themeToggler = () => {
    dispatch(
      uiState.theme === 'light'
        ? uiActions.toggleTheme('dark')
        : uiActions.toggleTheme('light')
    );
  };

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ThemeProvider theme={uiState.theme === 'light' ? lightTheme : darkTheme}>
      {uiState.loading && <Spinner />}
      <GlobalStyles />
      <BackgroundImage theme={uiState.theme} />
      <Layout>
        <Header theme={uiState.theme} themeToggler={themeToggler} />
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
