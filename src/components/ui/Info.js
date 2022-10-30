import styled from 'styled-components';

import githubDarkIcon from '../../assets/github-dark.png';
import githubLightIcon from '../../assets/github-light.png';

function Info({ theme }) {
  const iconTheme = theme === 'dark' ? githubLightIcon : githubDarkIcon;

  return (
    <>
      <DragInfo>Drag and drop to reorder list</DragInfo>
      <InfoBox>
        <p>
          Developed by{' '}
          <a href="https://toygarsaral.com" target="_blank" rel="noreferrer">
            Toygar Saral
          </a>{' '}
          &copy; 2022
        </p>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <img src={iconTheme} alt="Github Repository Icon" />
        </a>
      </InfoBox>
    </>
  );
}

export const DragInfo = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.completedText};
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    margin-top: 10rem;
    margin-bottom: 5rem;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  & > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.completedText};
  }

  & img {
    width: 3.5rem;
    transition: all 0.3s ease-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.15);
    }
  }
`;

export default Info;
