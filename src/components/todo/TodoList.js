import styled from 'styled-components';

import TodoBody from './TodoBody';
import TodoFooter from './TodoFooter';

function TodoList() {
  return (
    <TodoListWrapper>
      <TodoBody />
      <TodoFooter />
    </TodoListWrapper>
  );
}

const TodoListWrapper = styled.div`
  width: 100%;
  margin: 2.5rem auto;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem 1rem rgba(0, 0, 0, 0.2);

  @media (max-width: 375px) {
    margin: 1.5rem auto;
  }
`;

export default TodoList;
