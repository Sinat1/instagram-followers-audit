import styled from 'styled-components';

export const DescriptionWrapper = styled.section`
  background: #fff;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;

  text-align: center;

  &:hover {
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  }
`;

export const DescriptionTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #111;
`;

export const DescriptionText = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;

  strong {
    font-weight: 600;
  }

  em {
    color: #0077ff;
    font-style: normal;
    font-weight: 500;
  }
`;
