import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import {
  StepGuideWrapper,
  StepSlide,
  StepTitle,
  StepDescription,
  StepProgress,
  ArrowButton,
  ArrowLeft,
  ArrowRight,
  SliderContainer,
} from './StepGuide.styled';

const steps = [
  {
    title: 'Step 1',
    description: (
      <>
        <a
          href="https://accountscenter.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open account center
        </a>
      </>
    ),
  },
  {
    title: 'Step 2',
    description: 'Log in to the account you want to check',
  },
  {
    title: 'Step 3',
    description: 'Click ‘Your information and permissions’',
  },
  {
    title: 'Step 4',
    description: 'Click ‘Download your information’',
  },
  {
    title: 'Step 5',
    description: 'Click ‘Download or transfer information’',
  },
  {
    title: 'Step 6',
    description: 'Choose the account you want to use',
  },
  {
    title: 'Step 7',
    description: 'Click ‘Some of your information’',
  },
  {
    title: 'Step 8',
    description:
      'Scroll down, click ‘Followers and Following’, then click next',
  },
  {
    title: 'Step 9',
    description: 'Click ‘Download to Device’',
  },
  {
    title: 'Step 10',
    description:
      'Change the date range from ‘Last Year’ to ‘All Time’ and click save',
  },
  {
    title: 'Step 11',
    description: 'Change the format from HTML to JSON and click save',
  },
  {
    title: 'Step 12',
    description: 'Click ‘Create Files’',
  },
  {
    title: 'Step 13',
    description: 'Instagram will email you when the download is ready',
  },
  {
    title: 'Step 14',
    description: 'Once you receive the email, download the file and unzip it.',
  },
  {
    title: 'Step 15',
    description:
      'Now you should have ‘connections’ folder and download it using field below',
  },
];

const StepGuide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    slides: {
      origin: 'center',
      perView: 1,
      spacing: 15,
    },
  });

  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'ArrowRight') slider.current?.next();
      if (e.key === 'ArrowLeft') slider.current?.prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [slider]);

  return (
    <StepGuideWrapper>
      <ArrowButton
        className="left"
        onClick={() => slider.current?.prev()}
        disabled={currentSlide === 0}
      >
        <ArrowLeft />
      </ArrowButton>

      <SliderContainer ref={sliderRef} className="keen-slider">
        {steps.map((step, idx) => (
          <StepSlide className="keen-slider__slide" key={idx}>
            <StepProgress>
              Step {idx + 1} of {steps.length}
            </StepProgress>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </StepSlide>
        ))}
      </SliderContainer>

      <ArrowButton
        className="right"
        onClick={() => slider.current?.next()}
        disabled={currentSlide === steps.length - 1}
      >
        <ArrowRight />
      </ArrowButton>
    </StepGuideWrapper>
  );
};

export default StepGuide;
