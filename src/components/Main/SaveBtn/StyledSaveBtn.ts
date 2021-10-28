import styled from 'styled-components';
import { colorPrimary } from '../../../GlobalStyles/GlobalStyle';

export const StyledSaveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 118px;
  height: 44px;

  border: none;
  outline: none;
  background-color: ${colorPrimary};
  border-radius: 100px;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    color: green;
  }
`;
