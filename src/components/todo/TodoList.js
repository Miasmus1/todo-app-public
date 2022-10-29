import styled from 'styled-components';

const TodoListWrapper = styled.div`
  width: 100%;

  & > div {
    margin: 3rem auto;
    box-shadow: 0 0.5rem 3rem 1.5rem rgba(0, 0, 0, 0.1);
  }
`;

function TodoList({ children }) {
  return (
    <TodoListWrapper>
      <div>{children}</div>
    </TodoListWrapper>
  );
}

export default TodoList;
