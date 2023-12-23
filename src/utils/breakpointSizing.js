import { defaultTheme } from '@theme/defaultTheme';

/**
 * @param {string} property - CSS property to apply to the breakpoint
 * @param {object} devices - Object containing the devices to apply the breakpoint to. Currently supports mobile, tablet, and desktop
 * @returns {string} - CSS string containing the breakpoint
 * @example
 * breakpoints('color', {
 *  mobile: 'red',
 *  tablet: 'blue',
 *  desktop: 'green'
 * })
 */
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
