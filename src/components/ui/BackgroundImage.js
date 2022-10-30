import styled from 'styled-components';

import darkImg from '../../assets/images/bg-desktop-dark.jpg';
import lightImg from '../../assets/images/bg-desktop-light.jpg';

import darkImgMobile from '../../assets/images/bg-mobile-dark.jpg';
import lightImgMobile from '../../assets/images/bg-mobile-light.jpg';

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  content: url(${({ theme }) => (theme === 'dark' ? darkImg : lightImg)});
  z-index: -100;

  @media (max-width: 375px) {
    content: url(${({ theme }) =>
      theme === 'dark' ? darkImgMobile : lightImgMobile});
  }
`;

export default BackgroundImage;
