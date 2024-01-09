import { useState, useEffect } from 'react';

const useDeviceDetector = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    type: 'desktop',
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const checkDevice = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    let type;
    if (width <= 900) {
      type = 'mobile';
    } else if (width <= 1024) {
      type = 'tablet';
    } else {
      type = 'desktop';
    }

    setDeviceInfo({
      type,
      width,
      height,
    });
  };

  useEffect(() => {
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return deviceInfo;
};

export default useDeviceDetector;
