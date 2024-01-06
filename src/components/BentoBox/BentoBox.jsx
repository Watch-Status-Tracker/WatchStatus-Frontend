import { Wrapper } from '@components/BentoBox/BentoBox.styles';
import PropTypes from 'prop-types';

const BentoBox = ({ size = 'large' }) => {
  return <Wrapper size={size}></Wrapper>;
};

export default BentoBox;

BentoBox.prototypes = {
  size: PropTypes.oneOf[('large', 'small')],
};
