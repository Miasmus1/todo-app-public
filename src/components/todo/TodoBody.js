import styled from 'styled-components';

import { useSelector } from 'react-redux';

import TodoRow from './TodoRow';

function TodoBody() {
  const filteredTodos = useSelector((state) => state.todo.filteredTodos);

  return (
    <TodoBodyWrapper>
      {filteredTodos.map((todo, index) => (
        <TodoRow key={index} todo={todo} />
      ))}
    </TodoBodyWrapper>
  );
}

const TodoBodyWrapper = styled.div`
  width: 100%;
  max-height: 42vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default TodoBody;
