import styled from 'styled-components';

import moonIcon from '../../assets/images/icon-moon.svg';
import sunIcon from '../../assets//images/icon-sun.svg';

import NewTodo from '../todo/NewTodo';

function Header({ theme, themeToggler }) {
  const isThemeDark = theme === 'dark' ? sunIcon : moonIcon;

  return (
    <HeaderWrapper theme={isThemeDark}>
      <div>
        <h1>TODO</h1>
        <img src={isThemeDark} alt="Toggle Theme Mode" onClick={themeToggler} />
      </div>
      <NewTodo></NewTodo>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  color: white;
  width: 100%;

  @media (max-width: 375px) {
    margin-top: 4.7rem;
  }

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
    width: 100%;

    @media (max-width: 375px) {
      margin-bottom: 3.4rem;
    }

    & > h1 {
      font-size: 4rem;
      letter-spacing: 1.5rem;
      font-weight: 700;
      margin-bottom: -0.5rem;

      @media (max-width: 375px) {
        font-size: 3rem;
      }
    }

    & > img {
      cursor: pointer;
    }
  }
`;

export default Header;
