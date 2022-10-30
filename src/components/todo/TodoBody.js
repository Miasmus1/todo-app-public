import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { reorderTodos } from '../../store/todoThunks';

import TodoRow from './TodoRow';

function TodoBody() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector((state) => state.todo.filteredTodos);

  function onDragEndHandler(result) {
    if (!result.destination) return;

    const items = [...filteredTodos];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(reorderTodos(items));
  }

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <Droppable droppableId="todos">
        {(provided) => (
          <TodoBodyWrapper
            className="todos"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filteredTodos.map((todo, index) => (
              <TodoRow key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </TodoBodyWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const TodoBodyWrapper = styled.ul`
  width: 100%;
  max-height: 42vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem 1rem 0 0;
`;

export default TodoBody;
