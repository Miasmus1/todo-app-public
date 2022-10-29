import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/todoSlice';

import CustomCheckbox from '../ui/CustomCheckbox';

function TodoRow(props) {
  const dispatch = useDispatch();

  function toggleTodoHandler() {
    dispatch(todoActions.toggleTodo(props.todo.id));
  }

  return (
    <Row>
      <CustomCheckbox
        checked={props.todo.completed}
        onClick={toggleTodoHandler}
      />
      <span>{props.todo.text}</span>
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 2rem;
  transition: all 0.3s ease-out;
  background: ${({ theme }) => theme.rowColor};

  &:not(: last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }

  & span {
    width: 100%;
  }
`;

export default TodoRow;
