import {
  Label,
  OuterWrapper,
  SelectDropdown,
  SelectDropdownOption,
  SelectElement,
  SelectWrapper,
  SelectedValue,
  Wrapper,
} from '@components/Select/Select.styles';
import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

const Select = ({
  size = 'large',
  label = 'Label placeholder',
  // isMulti = false,
  isLabelVisible = true,
  placeholder = 'Select an option',
  width,
  onChange,
  value,
  options,
}) => {
  const [dropdownValue, setDropdownValue] = useState(value || null);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(null);

  const outerWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const currentRef = outerWrapperRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || !entries.length) {
        return;
      }
      setDropdownWidth(entries[0].contentRect.width);
    });

    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);

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
    <OuterWrapper ref={outerWrapperRef}>
      <Wrapper width={width}>
        {isLabelVisible && <Label onClick={handleOpenDropdown}>{label}</Label>}
        <SelectWrapper isOpen={isOpen} size={size} onClick={handleOpenDropdown}>
          <SelectElement>
            <SelectedValue isPlaceholder={!dropdownValue}>
              {dropdownValue || placeholder}
            </SelectedValue>
          </SelectElement>
        </SelectWrapper>
        <SelectDropdown size={size} width={dropdownWidth} isOpen={isOpen}>
          {generateOptions()}
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
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};
