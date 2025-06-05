import { useState, useEffect } from 'react';
import {
  StepGuideWrapper,
  StepTitle,
  StepDescription,
  StepControls,
  StepButton,
  StepProgress,
} from './StepGuide.styled';

const StepGuide = () => {
  const [step, setStep] = useState(0);
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
      description:
        'Once you receive the email, download the file and unzip it.',
    },
    {
      title: 'Step 15',
      description:
        'Now you should have ‘connections’ folder and download it using field below',
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  return (
    <StepGuideWrapper>
      <StepProgress>
        Step {step + 1} of {steps.length}
      </StepProgress>
      <StepTitle>{steps[step].title}</StepTitle>
      <StepDescription>{steps[step].description}</StepDescription>

      <StepControls>
        <StepButton onClick={() => setStep(s => s - 1)} disabled={step === 0}>
          ◀ Go back
        </StepButton>
        <StepButton
          onClick={() => setStep(s => s + 1)}
          disabled={step === steps.length - 1}
        >
          Next ▶
        </StepButton>
      </StepControls>
    </StepGuideWrapper>
  );
};

export default StepGuide;
