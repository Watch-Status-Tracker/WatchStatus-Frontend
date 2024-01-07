import { useCallback, useLayoutEffect, useState } from 'react';

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

  const handleOptionClick = useCallback(
    (e) => {
      const currentTargetValue = e.currentTarget.getAttribute('value');
      if (isMulti) {
        if (dropdownValue.includes(currentTargetValue)) {
          const newValue = dropdownValue.filter((value) => value !== currentTargetValue);
          onChange && onChange({ ...e, target: { value: newValue } });
          setDropdownValue(newValue);
          return;
        }
        const newValue = [...dropdownValue, currentTargetValue];
        onChange && onChange({ ...e, target: { value: newValue } });
        setDropdownValue(newValue);
        return;
      }
      onChange && onChange({ ...e, target: { value: currentTargetValue } });
      setDropdownValue(currentTargetValue);
      setIsOpen(false);
    },
    [isMulti, dropdownValue, onChange]
  );

  const handleOpenDropdown = () => {
    setIsOpen((state) => !state);
  };

  return { dropdownWidth, handleOptionClick, setIsOpen, isOpen, dropdownValue, handleOpenDropdown };
};
