import styled from 'styled-components';
import { colorPrimary } from '../../../GlobalStyles/GlobalStyle';

export const StyledChildWrapper = styled.div`
  display: flex;
  align-items: center;

  .delete-child {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    transform: translateY(-5px);

    color: ${colorPrimary};

    cursor: pointer;

    &:hover {
      color: red;
      text-decoration: underline;
    }
  }
`;
