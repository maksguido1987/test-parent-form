import styled from 'styled-components';
import { colorGrey, colorBlackLight } from '../../GlobalStyles/GlobalStyle';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 25px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  border-bottom: 1px solid ${colorBlackLight};

  & > img {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 175px;
    height: 32px;
  }

  .header-link {
    margin: 0 24px;
    color: ${colorGrey};
    font-size: 14px;
    line-height: 24px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
