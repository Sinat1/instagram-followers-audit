import styled from 'styled-components';
import { ReactComponent as SpyIcon } from '../../images/icon-spy.svg';

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 0;

  font-family: 'Inter', sans-serif;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
`;

export const StyledHeaderLogo = styled.a`
  width: 80px;
  height: 80px;
  margin-left: 15px;

  @media screen and (min-width: 320px) and (max-width: 450px) {
    width: 60px;
    height: 60px;
  }
`;

export const StyledSpyIcon = styled(SpyIcon)`
  width: 80px;
  height: 80px;

  @media screen and (min-width: 320px) and (max-width: 450px) {
    width: 60px;
    height: 60px;
  }
`;

export const StyledHeaderTitle = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  @media screen and (min-width: 320px) and (max-width: 450px) {
    font-size: 26px;
  }
`;
