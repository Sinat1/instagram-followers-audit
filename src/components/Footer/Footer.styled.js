import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #2f303a;
  padding: 40px;
  padding-bottom: 20px;
`;

export const StyledDisclaimer = styled.p`
  text-align: center;
  color: #fff;
  font-size: 12px;
  margin-top: 50px;
  margin-bottom: 0;
`;

export const StyledFooterTitle = styled.h2`
  color: #fff;
  text-align: center;
  margin-top: 10px;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledSocialList = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin: 55px auto;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const StyledSocialItem = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;

export const StyledSocialLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const StyledSocialIcon = styled.svg`
  fill: #fff;
  width: 40px;
  height: 40px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #c7dcf6;
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const StyledContactsList = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 320px) and (max-width: 767.9px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledContactsItem = styled.li`
  @media screen and (min-width: 320px) and (max-width: 767.9px) {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const StyledContactsLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const StyledContactsIcon = styled.svg`
  fill: #fff;
  width: 15px;
  margin-right: 5px;
  height: 20px;
`;
