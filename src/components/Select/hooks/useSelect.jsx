import { useCallback, useLayoutEffect, useState } from 'react';

export const useSelect = (ref, onChange, name, onFormChange) => {
  const [dropdownWidth, setDropdownWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState({});

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
      const currentTargetValue = {
        name: e.currentTarget.getAttribute('name'),
        value: e.currentTarget.getAttribute('value'),
      };
      onChange && onChange({ ...e, target: { ...e.target, value: currentTargetValue, name } });
      onFormChange && onFormChange();
      setDropdownValue(currentTargetValue);
      setIsOpen(false);
    },
    [dropdownValue, onChange, name]
  );

  const handleOpenDropdown = () => {
    setIsOpen((state) => !state);
  };

  return { dropdownWidth, handleOptionClick, setIsOpen, isOpen, dropdownValue, handleOpenDropdown };
};
