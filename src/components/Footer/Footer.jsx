import { ReactComponent as TelegramIcon } from '../../images/icon-telegram.svg';
import { ReactComponent as GithubIcon } from '../../images/icon-github.svg';
import { ReactComponent as LinkedInIcon } from '../../images/icon-linkedin.svg';
import { ReactComponent as LocationIcon } from '../../images/icon-location.svg';
import { ReactComponent as PhoneIcon } from '../../images/icon-phone.svg';
import { ReactComponent as MailIcon } from '../../images/icon-mail.svg';

import {
  StyledFooter,
  StyledDisclaimer,
  StyledFooterTitle,
  StyledSocialList,
  StyledSocialItem,
  StyledSocialLink,
  StyledSocialIcon,
  StyledContactsList,
  StyledContactsItem,
  StyledContactsLink,
  StyledContactsIcon,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTitle>CONTACT INFORMATION</StyledFooterTitle>
      <StyledSocialList>
        <StyledSocialItem>
          <StyledSocialLink href="https://t.me/AleksandroVvvV" target="_blank">
            <StyledSocialIcon as={TelegramIcon} />
          </StyledSocialLink>
        </StyledSocialItem>
        <StyledSocialItem>
          <StyledSocialLink href="https://github.com/Sinat1" target="_blank">
            <StyledSocialIcon as={GithubIcon} />
          </StyledSocialLink>
        </StyledSocialItem>
        <StyledSocialItem>
          <StyledSocialLink
            href="https://www.linkedin.com/in/vitalii-aleksandrovv/"
            target="_blank"
          >
            <StyledSocialIcon as={LinkedInIcon} />
          </StyledSocialLink>
        </StyledSocialItem>
      </StyledSocialList>
      <StyledContactsList>
        <StyledContactsItem>
          <StyledContactsLink href="tel:+380661560361">
            <StyledContactsIcon as={PhoneIcon} />
            +380 (66) 156-03-61
          </StyledContactsLink>
        </StyledContactsItem>
        <StyledContactsItem>
          <StyledContactsLink
            href="https://maps.app.goo.gl/LhQVH5FJ5vA36Mfn8"
            target="_blank"
          >
            <StyledContactsIcon as={LocationIcon} />
            Kyiv, Ukraine, 2025
          </StyledContactsLink>
        </StyledContactsItem>
        <StyledContactsItem>
          <StyledContactsLink href="mailto:sinati0508@gmail.com">
            <StyledContactsIcon as={MailIcon} />
            sinati0508@gmail.com
          </StyledContactsLink>
        </StyledContactsItem>
      </StyledContactsList>
      <StyledDisclaimer>
        Disclaimer: This Web Application does not collect any of your personal
        data. It only saves your data in web browser's local storage for your
        personal convenience and can be cleared at any time.
      </StyledDisclaimer>
    </StyledFooter>
  );
};

export default Footer;
