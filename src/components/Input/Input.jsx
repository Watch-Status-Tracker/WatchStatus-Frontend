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
  name,
  type = 'text',
  formOnChange = false,
  test,
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e) => {
    onChange && onChange(e);
    setInputValue(e.target.value);
    formOnChange && formOnChange();
  };

  return (
    <Wrapper width={width} size={size} data-test={`${test}_wrapper`}>
      {isLabelVisible && <StyledLabel>{label}</StyledLabel>}
      <InputContent size={size}>
        {icon}
        <StyledInput
          type={type}
          name={name}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          data-test={test}
        />
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
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  formOnChange: PropTypes.func,
};
