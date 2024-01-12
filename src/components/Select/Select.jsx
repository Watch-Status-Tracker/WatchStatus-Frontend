import Icon from '@components/Icon/Icon';
import {
  Label,
  OuterWrapper,
  SelectDropdown,
  SelectDropdownOption,
  SelectDropdownPlaceholder,
  SelectElement,
  SelectWrapper,
  SelectedMultiValue,
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
  isMulti = false,
  isLabelVisible = true,
  placeholder = 'Select an option',
  width,
  onChange,
  value,
  options = [],
  name,
}) => {
  const outerWrapperRef = useRef(null);
  const { dropdownWidth, isOpen, dropdownValue, handleOptionClick, handleOpenDropdown, setIsOpen } =
    useSelect(outerWrapperRef, isMulti, onChange, value, name);
  useOutsideClick(outerWrapperRef, () => setIsOpen(false));

  const renderOption = (option) => {
    const isOptionSelected = (option) => {
      if (!Array.isArray(dropdownValue)) {
        return dropdownValue === option;
      }

      return dropdownValue.some((value) => value === option);
    };

    return (
      <SelectDropdownOption
        key={option}
        isMulti={isMulti}
        isSelected={isOptionSelected(option)}
        value={option}
        size={size}
        onClick={handleOptionClick}
      >
        <SelectedValue>{option}</SelectedValue>
      </SelectDropdownOption>
    );
  };

  const generateOptions = () =>
    options.length ? (
      options.map(renderOption)
    ) : (
      <SelectDropdownPlaceholder>No data</SelectDropdownPlaceholder>
    );

  const renderMultiValue = (value, isPlaceholder) => (
    <SelectedMultiValue key={value} size={size} isMulti={isMulti} isPlaceholder={isPlaceholder}>
      {value}
    </SelectedMultiValue>
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const generatedOptions = useMemo(() => generateOptions(), [options]);

  return (
    <OuterWrapper width={width} ref={outerWrapperRef}>
      <Wrapper width={width}>
        {isLabelVisible && <Label onClick={handleOpenDropdown}>{label}</Label>}
        <SelectWrapper isOpen={isOpen} size={size} onClick={handleOpenDropdown}>
          <SelectElement isOpen={isOpen}>
            {isMulti ? (
              <>
                {renderMultiValue(dropdownValue[0] || placeholder, !dropdownValue.length)}
                {dropdownValue.length > 1 &&
                  renderMultiValue(`+${dropdownValue.length - 1}`, !dropdownValue)}
              </>
            ) : (
              <SelectedValue isPlaceholder={!dropdownValue}>
                {dropdownValue || placeholder}
              </SelectedValue>
            )}
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
  isMulti: PropTypes.bool,
  isLabelVisible: PropTypes.bool,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
  ]),
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};
