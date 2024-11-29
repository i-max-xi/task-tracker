import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
};

export default useScrollToSection;
