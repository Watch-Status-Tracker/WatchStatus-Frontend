import { useLayoutEffect, useState } from 'react';

export const useSelect = (ref, isMulti, onChange, value) => {
  const [dropdownWidth, setDropdownWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(
    isMulti ? (value ? [...value] : []) : value || null
  );

  useLayoutEffect(() => {
    const currentRef = ref.current;
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
  }, [ref]);

  const handleOptionClick = (e) => {
    if (isMulti) {
      if (dropdownValue.includes(e.currentTarget.getAttribute('value'))) {
        const newValue = dropdownValue.filter(
          (value) => value !== e.currentTarget.getAttribute('value')
        );
        onChange && onChange({ ...e, target: { value: newValue } });
        setDropdownValue(newValue);
        return;
      }
      const newValue = [...dropdownValue, e.currentTarget.getAttribute('value')];
      onChange && onChange({ ...e, target: { value: newValue } });
      setDropdownValue(newValue);
      return;
    }
    onChange && onChange({ ...e, target: { value: e.currentTarget.getAttribute('value') } });
    setDropdownValue(e.currentTarget.getAttribute('value'));
    setIsOpen(false);
  };

  const handleOpenDropdown = () => {
    setIsOpen(!isOpen);
  };

  return { dropdownWidth, handleOptionClick, setIsOpen, isOpen, dropdownValue, handleOpenDropdown };
};
