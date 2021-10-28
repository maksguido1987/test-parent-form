import styled from 'styled-components';
import { colorPrimary } from '../../GlobalStyles/GlobalStyle';

export const StyledAddChildBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: -15px;
  right: 0;

  width: 100%;
  max-width: 204px;
  height: 42px;

  padding: 10px 18px;

  border-radius: 100px;
  border: 2px solid ${colorPrimary};
  background-image: url('../../assets/icons/plus.svg');
  background-repeat: no-repeat;
  background-position: 18px center;

  color: ${colorPrimary};
  font-size: 14px;
  line-height: 24px;

  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 2px 0px rgba(1, 169, 253, 0.582);
  }
`;
