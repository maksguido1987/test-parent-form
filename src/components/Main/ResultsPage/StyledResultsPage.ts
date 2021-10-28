import styled from 'styled-components';
import { colorBlackLight } from '../../../GlobalStyles/GlobalStyle';

export const StyledResultsPage = styled.div`
  width: 100%;
  max-width: 616px;

  margin: 0 auto;

  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  .parent-data {
    margin: 0 0 80px 0;
  }

  span {
    display: inline-block;
    padding: 10px 20px;
    margin: 0 0 10px 0;
    background-color: ${colorBlackLight};
    border-radius: 5px;
  }
`;
