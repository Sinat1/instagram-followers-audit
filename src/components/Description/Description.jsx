import {
  DescriptionWrapper,
  DescriptionTitle,
  DescriptionText,
} from './Description.styled';

const Description = () => (
  <DescriptionWrapper>
    <DescriptionTitle>What does this app do?</DescriptionTitle>
    <DescriptionText>
      <strong>Instagram Followers Audit</strong> helps you identify accounts
      you're following which aren’t following you back. Simply upload your
      Instagram data — the app processes everything
      <em> safely and locally</em> in your browser.
      <br />
      <br />
      <strong>No servers, no tracking, no hassle.</strong>
    </DescriptionText>
  </DescriptionWrapper>
);

export default Description;
