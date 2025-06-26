import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 100;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s, background-color 0.3s ease;
  animation: ${float} 2.5s ease-in-out infinite;

  &:hover {
    background-color: #0077ff;
  }

  @media (max-width: 600px) {
    width: 45px;
    height: 45px;
    right: 25px;
  }
`;

export const ScrollIcon = styled.svg`
  width: 50px;
  height: 50px;
  fill: #fff;

  @media (max-width: 600px) {
    width: 45px;
    height: 45px;
  }
`;
