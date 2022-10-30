import styled from 'styled-components';

function TodoBody({ children }) {
  return <TodoBodyWrapper>{children}</TodoBodyWrapper>;
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
