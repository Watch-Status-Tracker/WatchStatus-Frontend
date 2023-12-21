import { defaultTheme } from '@theme/defaultTheme';

export const breakpoints = (property, devices) => {
  if (!property) {
    throw new TypeError('You must pass a property to the breakpoints function');
  }

  if (!devices) {
    throw new TypeError('You must pass a devices object to the breakpoints function');
  }

  if (!Object.keys(devices).length) {
    return `${property}: ${devices}`;
  }

  return Object.entries(devices).map((entry) => {
    if (entry[0] === 'mobile')
      return `${defaultTheme.breakpoint.mobile}{
      ${property}:${devices.mobile};
    }`;

    if (entry[0] === 'tablet')
      return `${defaultTheme.breakpoint.tablet}{
      ${property}:${devices.tablet};
    }`;

    if (entry[0] === 'desktop')
      return `${defaultTheme.breakpoint.desktop}{
      ${property}:${devices.desktop};
    }`;
  });
};
