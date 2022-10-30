import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 37%;
  margin: auto;

  @media (max-width: 992px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default Layout;
