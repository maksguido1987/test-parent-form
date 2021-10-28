import styled from 'styled-components';
import { colorBlack } from '../../GlobalStyles/GlobalStyle';

export const StyledMain = styled.main`
  width: 100%;
  max-width: 616px;
  margin: 30px auto;

  & > h1 {
    margin: 0 0 20px 0;

    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${colorBlack};
  }
`;
