import { Wrapper } from '@components/BentoBox/BentoBox.styles';
import PropTypes from 'prop-types';

const BentoBox = ({ size = 'large', children }) => {
  return <Wrapper size={size}>{children}</Wrapper>;
};

export default BentoBox;

BentoBox.prototypes = {
  size: PropTypes.oneOf[('large', 'small')],
};
