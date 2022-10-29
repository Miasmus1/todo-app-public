import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../../store/todoSlice';

import styled from 'styled-components';

function TodoFooter(props) {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    dispatch(todoActions.filterTodos(filter));
  }, [todoState.todos, filter, dispatch]);

  function filterHandler(e) {
    setFilter(e.target.innerText);
    dispatch(todoActions.filterTodos(e.target.innerText));
  }

  function clearCompletedHandler() {
    dispatch(todoActions.clearCompleted());
  }

  const remainingTodosCount = todoState.todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <Footer>
      <span>{remainingTodosCount} items left</span>
      <div>
        <span
          onClick={filterHandler}
          className={filter === 'All' ? 'active' : null}
        >
          All
        </span>
        <span
          onClick={filterHandler}
          className={filter === 'Active' ? 'active' : null}
        >
          Active
        </span>
        <span
          onClick={filterHandler}
          className={filter === 'Completed' ? 'active' : null}
        >
          Completed
        </span>
      </div>
      <span onClick={clearCompletedHandler}>Clear Completed</span>
    </Footer>
  );
}

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme.inputBgColor};
  color: ${(props) => props.theme.inputTextColor};
  transition: all 0.3s ease-out;
  background: ${({ theme }) => theme.rowColor};
  font-size: 1.2rem;

  & > div {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  & > span:first-child {
    width: 15%;
  }

  & span:hover {
    cursor: pointer;
  }
`;

export default TodoFooter;
