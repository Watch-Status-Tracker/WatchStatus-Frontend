import {
  Label,
  SelectDropdown,
  SelectDropdownOption,
  SelectElement,
  SelectWrapper,
  SelectedValue,
  Wrapper,
} from '@components/Select/Select.styles';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Select = ({
  size = 'large',
  label = 'Label placeholder',
  // isMulti = false,
  isLabelVisible = true,
  placeholder = 'Select an option dfsd fs dfs fsd fsd fsd fsd  f  ghhgghghgh  gh ghgh  ',
  width,
  onChange,
  value,
  options,
}) => {
  const [dropdownValue, setDropdownValue] = useState(value || null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (e) => {
    onChange && onChange({ ...e, target: { value: e.currentTarget.getAttribute('value') } });
    setDropdownValue(e.currentTarget.getAttribute('value'));
    setIsOpen(false);
  };

  const generateOptions = () =>
    (options &&
      options.map((option, index) => (
        <SelectDropdownOption
          key={`${option}-${index}`}
          value={option}
          size={size}
          onClick={handleOptionClick}
        >
          <SelectedValue>{option}</SelectedValue>
        </SelectDropdownOption>
      ))) || <SelectDropdownOption>No data</SelectDropdownOption>;

  return (
    <Wrapper width={width}>
      {isLabelVisible && <Label onClick={handleOpenDropdown}>{label}</Label>}
      <SelectWrapper isOpen={isOpen} size={size} onClick={handleOpenDropdown}>
        <SelectElement>
          <SelectedValue isPlaceholder={!dropdownValue}>
            {dropdownValue || placeholder}
          </SelectedValue>
        </SelectElement>
      </SelectWrapper>

      <SelectDropdown isOpen={isOpen}>{generateOptions()}</SelectDropdown>
    </Wrapper>
  );
};

export default Select;

Select.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  label: PropTypes.string,
  isMulti: PropTypes.bool,
  isLabelVisible: PropTypes.bool,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};
