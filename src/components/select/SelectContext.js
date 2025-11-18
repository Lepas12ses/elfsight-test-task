import { createContext, useContext } from 'react';

export const SelectContext = createContext({
  isExpanded: false,
  selectedItem: null,
  items: [],
  renderItem: () => {},
  toggle: () => {},
  close: () => {},
  onSelect: () => {}
});

export function useSelectContext() {
  const context = useContext(SelectContext);

  return context;
}
