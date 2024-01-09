import { InputContent, StyledInput, StyledLabel, Wrapper } from '@components/Input/Input.styles';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Input = ({
  size = 'large',
  label = 'Label placeholder',
  isLabelVisible = true,
  placeholder = 'Text placeholder',
  icon,
  width,
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e) => {
    onChange &&
      onChange({
        ...e,
        target: {
          value: [e.target.value],
        },
      });
    setInputValue(e.target.value);
  };

  return (
    <Wrapper width={width} size={size}>
      {isLabelVisible && <StyledLabel>{label}</StyledLabel>}
      <InputContent size={size}>
        {icon}
        <StyledInput value={inputValue} onChange={handleChange} placeholder={placeholder} />
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
