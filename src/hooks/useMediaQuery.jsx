import { mediaQueryRules } from '@theme/defaultTheme';
import { useEffect, useState } from 'react';

export const useMediaQuery = () => {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia(mediaQueryRules.mobile).matches) setDevice('mobile');
      if (window.matchMedia(mediaQueryRules.tablet).matches) setDevice('tablet');
      if (window.matchMedia(mediaQueryRules.desktop).matches) setDevice('desktop');
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return device;
};
