import styled from 'styled-components';

function TodoList({ children }) {
  return <TodoListWrapper>{children}</TodoListWrapper>;
}

const TodoListWrapper = styled.div`
  width: 100%;
  margin: 2.5rem auto;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem 1rem rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @media (max-width: 375px) {
    margin: 1.5rem auto;
  }
`;

export default TodoList;
