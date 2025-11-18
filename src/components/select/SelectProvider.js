import { useCallback, useState } from 'react';
import { SelectContext } from './SelectContext';

export function SelectProvider({
  children,
  selectedItem = null,
  items = [],
  renderItem = () => {},
  onSelect = () => {},
  placeholder
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = useCallback(() => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  }, []);

  const close = useCallback(() => {
    setIsExpanded(false);
  }, []);

  const handleSelect = useCallback(
    (item) => {
      close();
      onSelect(item);
    },
    [onSelect, close]
  );

  const ctxValue = {
    isExpanded,
    selectedItem,
    items,
    renderItem,
    toggle,
    close,
    onSelect: handleSelect,
    placeholder
  };

  return (
    <SelectContext.Provider value={ctxValue}>{children}</SelectContext.Provider>
  );
}
