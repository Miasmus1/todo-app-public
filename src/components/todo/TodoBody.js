import styled from 'styled-components';

const TodoBodyWrapper = styled.div`
  width: 100%;

  & > div {
    max-height: 42vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem 1rem 0 0;
  }
`;

function TodoList({ children }) {
  return (
    <TodoBodyWrapper>
      <div>{children}</div>
    </TodoBodyWrapper>
  );
}

export default TodoList;
