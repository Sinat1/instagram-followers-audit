import styled from 'styled-components';

export const StepGuideWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #eee;
  padding: 3rem 2rem;
  margin: 50px auto;
  max-width: 700px;
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  }
`;

export const StepTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 1.2rem;
`;

export const StepDescription = styled.p`
  font-size: 1.15rem;
  color: #444;
  line-height: 1.8;
  max-width: 85%;
  margin: 0 auto;

  a {
    color: #0077ff;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #005bd1;
    }
  }
`;

export const StepProgress = styled.div`
  font-size: 1rem;
  color: #888;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const StepControls = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const StepButton = styled.button`
  background-color: #111;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s ease;

  &:disabled {
    background-color: #bbb;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #222;
  }
`;
