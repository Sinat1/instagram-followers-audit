import {
  StyledHeader,
  StyledHeaderLogo,
  StyledSpyIcon,
  StyledHeaderTitle,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo href="#">
        <StyledSpyIcon />
      </StyledHeaderLogo>
      <StyledHeaderTitle>Instagram followers audit</StyledHeaderTitle>
    </StyledHeader>
  );
};

export default Header;
