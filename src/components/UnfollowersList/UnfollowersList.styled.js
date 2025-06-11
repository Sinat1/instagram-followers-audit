import styled from 'styled-components';

export const UnfollowersWrapper = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #eee;
  padding: 2.5rem;
  margin: 3rem auto;
  max-width: 700px;
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 5px;
  right: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 0.5rem;
  background-color: transparent;
  color: #ff5555;
  border: 2px solid #ff5555;
  width: 35px;
  height: 35px;
  padding: 0;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ff5555;
    color: white;
  }

  &:hover svg {
    fill: #fff;
  }
`;

export const UnfollowersIcon = styled.svg`
  fill: #111;
  width: 20px;
  height: 20px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const UnfollowersTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 1.5rem;
`;

export const UnfollowersCount = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

export const UnfollowersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 80%;
`;

export const UnfollowerItem = styled.li`
  font-size: 1.1rem;
  padding: 0.8rem 1rem;
  margin-bottom: 0.6rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  transition: background 0.2s ease;
  position: relative;

  &:hover {
    background-color: #f1f1f1;
  }

  &[data-active='true'] {
    background-color: #e6f7ff;
  }

  &[data-active='true']::after {
    content: '←';
    position: absolute;
    left: -1.2rem;
    top: 50%;
    transform: translateY(-50%);
    color: #007aff;
    font-size: 1.2rem;
  }
`;

export const UnFollowersLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #333;

  @media screen and (min-width: 320px) and (max-width: 380px) {
    font-size: 14px;
  }
`;
