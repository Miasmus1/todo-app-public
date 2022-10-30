import styled from 'styled-components';

import checkIcon from '../../assets/images/icon-check.svg';

function CustomCheckbox({ checked, onClick }) {
  return <Radio type="checkbox" checked={checked} onChange={onClick} />;
}

const Radio = styled.input`
  width: 3rem;
  height: 2.5rem;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid grey;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  margin-right: 2.5rem;
  transition: all 0.2s ease-out;

  &:hover {
    background: linear-gradient(
          ${({ theme }) => theme.rowColor},
          ${({ theme }) => theme.rowColor}
        )
        padding-box,
      linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))
        border-box;
    border-radius: 50%;
    border: 1px solid transparent;
  }

  &:checked {
    background: url(${checkIcon}) no-repeat center center,
      linear-gradient(transparent, transparent) padding-box,
      linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))
        border-box;
    border-radius: 50%;
    border: 1px solid transparent;
  }
`;

export default CustomCheckbox;
