import styled from 'styled-components';
import { colorBlack, colorGreyLight } from '../../GlobalStyles/GlobalStyle';
import { ILabelProps } from '../../types';

export const StyledLabel = styled.label<ILabelProps>`
  display: block;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '616px'};
  height: 56px;

  padding: 8px 16px;
  margin: ${({ margin }) => margin || '0 0 10px 0'};
  &:last-child {
    margin: 0;
  }

  border: 1px solid ${colorGreyLight};
  border-radius: 4px;
  color: ${colorBlack};

  & > input {
    display: block;
    width: 80%;
    height: 24px;
    border: none;
    outline: none;
    font-weight: 400;
    line-height: 24px;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }
`;
