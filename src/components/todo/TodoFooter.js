import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../../store/todoSlice';
import { clearCompletedTodos } from '../../store/todoThunks';

import styled from 'styled-components';

function TodoFooter() {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(todoActions.filterTodos(todoState.filterStatus));
  }, [todoState.todos, todoState.filterStatus, dispatch]);

  function filterHandler(e) {
    dispatch(todoActions.filterTodos(e.target.innerText));
  }

  function clearCompletedHandler() {
    if (todoState.todos.some((todo) => todo.completed)) {
      dispatch(clearCompletedTodos(todoState.todos));
    }
  }

  const remainingTodosCount = todoState.todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <Footer>
      <p>{remainingTodosCount} items left</p>
      <div>
        <span
          onClick={filterHandler}
          className={todoState.filterStatus === 'All' ? 'active' : null}
        >
          All
        </span>
        <span
          onClick={filterHandler}
          className={todoState.filterStatus === 'Active' ? 'active' : null}
        >
          Active
        </span>
        <span
          onClick={filterHandler}
          className={todoState.filterStatus === 'Completed' ? 'active' : null}
        >
          Completed
        </span>
      </div>
      <span onClick={clearCompletedHandler}>Clear Completed</span>
    </Footer>
  );
}

const Footer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  color: ${(props) => props.theme.completedText};
  transition: all 0.3s ease-out;
  background: ${({ theme }) => theme.rowColor};
  font-size: 1.4rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0 0 1rem 1rem;

  & > div {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
  }

  & > p {
    width: 20%;
  }

  & span:hover {
    cursor: pointer;
  }

  & span:not(.active):hover {
    color: ${({ theme }) => theme.textHover};
  }

  & > div > span {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    & > p {
      width: 30%;
    }

    & > div {
      position: absolute;
      bottom: -200%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${(props) => props.theme.rowColor};
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 3rem;
      padding: 2rem;
      border-radius: 1rem;
      transition: background-color 0.3s ease-out;
      align-items: center;
      box-shadow: 0 1rem 2rem 1rem rgba(0, 0, 0, 0.2);
    }
  }
`;

export default TodoFooter;
