import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { toggleTodoData, deleteTodoData } from '../../store/todoThunks';

import CustomCheckbox from '../ui/CustomCheckbox';

import iconCross from '../../assets/images/icon-cross.svg';

import { Draggable } from 'react-beautiful-dnd';

function TodoRow(props) {
  const dispatch = useDispatch();
  console.log(props);

  function toggleTodoHandler() {
    console.log(props.todo);
    dispatch(toggleTodoData(props.todo.id, !props.todo.completed));
  }

  function deleteTodoHandler() {
    dispatch(deleteTodoData(props.todo.id));
  }

  return (
    // Implement the Draggable component here
    <Draggable draggableId={props.todo.id} index={props.index}>
      {(provided) => (
        <Row
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CustomCheckbox
            checked={props.todo.completed}
            onClick={toggleTodoHandler}
          />
          <span className={props.todo.completed ? 'completed' : null}>
            {props.todo.text}
          </span>
          <img
            src={iconCross}
            onClick={deleteTodoHandler}
            alt="Delete Todo Icon"
          ></img>
        </Row>
      )}
    </Draggable>
  );
}

const Row = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 2rem;
  transition: all 0.3s ease-out;
  background: ${({ theme }) => theme.rowColor};

  @media (max-width: 375px) {
    padding: 1.6rem;
  }

  &:hover > img {
    opacity: 1;
  }

  &:not(: last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }

  & span {
    width: 100%;

    &.completed {
      text-decoration: line-through;
      color: ${({ theme }) => theme.completedText};
    }
  }

  & img {
    transition: all 0.3s ease-out;
    opacity: 0;
  }

  & img:hover {
    cursor: pointer;
    filter: brightness(1.5);
  }
`;

export default TodoRow;
