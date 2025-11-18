import { createContext, useContext } from 'react';

export const SelectContext = createContext({
  isExpanded: false,
  selectedItem: null,
  items: [],
  renderItem: () => {},
  toggle: () => {},
  close: () => {},
  onSelect: () => {},
  placeholder: 'Select'
});

export function useSelectContext() {
  const context = useContext(SelectContext);

  return context;
}
