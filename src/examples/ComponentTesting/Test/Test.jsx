import { Wrapper } from '@examples/ComponentTesting/Test/TestComponent.styles';
import PropTypes from 'prop-types';

// Component structure
export const TestComponent = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

// Types for component props using prop-types
TestComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
