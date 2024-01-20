import Icon from '@components/Icon/Icon';
import {
  Label,
  OuterWrapper,
  SelectDropdown,
  SelectDropdownOption,
  SelectDropdownPlaceholder,
  SelectElement,
  SelectWrapper,
  SelectedValue,
  Wrapper,
} from '@components/Select/Select.styles';
import { useSelect } from '@components/Select/hooks/useSelect';
import { useOutsideClick } from '@hooks/useOutsideClick';
import PropTypes from 'prop-types';
import { useMemo, useRef } from 'react';

const Select = ({
  size = 'large',
  label = 'Label placeholder',
  isLabelVisible = true,
  placeholder = 'Select an option',
  width,
  onChange,
  options = [],
  name,
  onFormChange,
}) => {
  const outerWrapperRef = useRef(null);
  const { dropdownWidth, isOpen, dropdownValue, handleOptionClick, handleOpenDropdown, setIsOpen } =
    useSelect(outerWrapperRef, onChange, name, onFormChange);
  useOutsideClick(outerWrapperRef, () => setIsOpen(false));

  const renderOption = (option) => {
    const isOptionSelected = (option) => {
      if (!dropdownValue?.value) return false;

      return +dropdownValue.value === +option.value;
    };

    return (
      <SelectDropdownOption
        key={`${option.value}-${option.name}`}
        isSelected={isOptionSelected(option)}
        value={option.value}
        size={size}
        onClick={handleOptionClick}
        name={option.name}
      >
        <SelectedValue>{option.name}</SelectedValue>
      </SelectDropdownOption>
    );
  };

  const generateOptions = () =>
    options.length ? (
      options.map(renderOption)
    ) : (
      <SelectDropdownPlaceholder>No data</SelectDropdownPlaceholder>
    );

  const generatedOptions = useMemo(() => generateOptions(), [dropdownValue]);

  return (
    <OuterWrapper width={width} ref={outerWrapperRef}>
      <Wrapper width={width}>
        {isLabelVisible && <Label onClick={handleOpenDropdown}>{label}</Label>}
        <SelectWrapper isOpen={isOpen} size={size} onClick={handleOpenDropdown}>
          <SelectElement isOpen={isOpen}>
            <SelectedValue isPlaceholder={!dropdownValue}>
              {dropdownValue?.name || placeholder}
            </SelectedValue>
            <Icon.ChevronDown />
          </SelectElement>
        </SelectWrapper>
        <SelectDropdown size={size} width={dropdownWidth} isOpen={isOpen}>
          {generatedOptions}
        </SelectDropdown>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Select;

Select.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  label: PropTypes.string,
  isLabelVisible: PropTypes.bool,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};
