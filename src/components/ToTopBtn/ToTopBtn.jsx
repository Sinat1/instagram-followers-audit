import { useState, useEffect } from 'react';
import { ScrollButton, ScrollIcon } from './ToTopBtn.styled';
import { ReactComponent as UpIcon } from '../../images/icon-up.svg';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ScrollButton onClick={scrollToTop} $visible={isVisible} title="Go to top">
      <ScrollIcon as={UpIcon} />
    </ScrollButton>
  );
};

export default ScrollToTop;
