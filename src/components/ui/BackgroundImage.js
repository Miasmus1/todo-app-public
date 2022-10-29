import styled from 'styled-components';

import darkImg from '../../assets/images/bg-desktop-dark.jpg';
import lightImg from '../../assets/images/bg-desktop-light.jpg';

const BackgroundImage = styled.img`
  max-width: 100%;
  position: absolute;
  top: 0;
  content: url(${({ theme }) => (theme === 'dark' ? darkImg : lightImg)});
  z-index: -100;
`;

export default BackgroundImage;
