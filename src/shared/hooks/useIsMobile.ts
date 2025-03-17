import { useEffect, useState } from 'react';
import { getCssVariable } from '../utils/getCssVariable';

export const useIsMobile = () => {
  const mobileBreakpoint = getCssVariable('--mobile-breakpoint');

  const checkIsMobile = () =>
    window.matchMedia(`(max-width: ${mobileBreakpoint})`).matches;

  const [isMobile, setIsMobile] = useState(checkIsMobile());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};
