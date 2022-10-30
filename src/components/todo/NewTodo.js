import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../../store/todoSlice';

import { sendTodoData } from '../../store/todoThunks';

import CustomCheckbox from '../ui/CustomCheckbox';

function NewTodo() {
  const todoState = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const newTodoInputHandler = (e) => {
    dispatch(todoActions.newTodoHandler(e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (todoState.newTodo.trim() !== '') {
      dispatch(sendTodoData(todoState.newTodo));
    } else {
      alert('Please enter a todo');
    }
  };

  return (
    <Row>
      <CustomCheckbox onClick={submitHandler} checked={false} />
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={todoState.newTodo}
          onChange={newTodoInputHandler}
        />
      </form>
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  transition: all 0.3s ease-out;
  background: ${({ theme }) => theme.rowColor};
  box-shadow: 0 1rem 2rem 1rem rgba(0, 0, 0, 0.2);

  @media (max-width: 375px) {
    padding: 1.6rem;
  }

  & form {
    width: 100%;
  }

  & input[type='text'] {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease-out;
  }
`;

export default NewTodo;
