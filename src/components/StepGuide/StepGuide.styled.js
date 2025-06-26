import styled from 'styled-components';
import { ReactComponent as ArrowLeftIcon } from '../../images/icon-arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../images/icon-arrow-right.svg';

export const StepGuideWrapper = styled.div`
  max-width: 700px;
  margin: 50px auto;
  position: relative;
  padding: 3rem 2rem;
  background: #ffffff;
  border: 1px solid #eee;
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  }
`;

export const StepSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 100%;
  min-height: 280px;

  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;

  .keen-slider__slide {
    transition: transform 0.3s ease;
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

export const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
`;

export const ArrowButton = styled.button`
  background: #111;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0077ff;
  }

  &.left {
    left: -22px;
  }

  &.right {
    right: -22px;
  }
`;

export const ArrowLeft = styled(ArrowLeftIcon)`
  width: 25px;
  height: 25px;
  fill: white;
`;

export const ArrowRight = styled(ArrowRightIcon)`
  width: 25px;
  height: 25px;
  fill: white;
`;
