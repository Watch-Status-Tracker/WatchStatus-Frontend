import { InputContent, StyledInput, StyledLabel, Wrapper } from '@components/Input/Input.styles';
import PropTypes from 'prop-types';
const Input = ({
  size = 'large',
  label,
  isLabelVisible = true,
  placeholder = 'Placeholder',
  icon,
  width = '230px',
  value,
}) => {
  return (
    <Wrapper width={width} size={size}>
      {isLabelVisible && <StyledLabel>{label}</StyledLabel>}
      <InputContent size={size}>
        {icon}
        <StyledInput value={value} placeholder={placeholder} />
      </InputContent>
    </Wrapper>
  );
};

export default Input;

Input.propTypes = {
  size: PropTypes.oneOf(['large', 'small']),
  label: PropTypes.string,
  isLabelVisible: PropTypes.bool,
  icon: PropTypes.element,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
