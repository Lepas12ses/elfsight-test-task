import { SelectProvider } from './SelectProvider';
import { SelectContainer } from './SelectContainer';
import { SelectButton } from './SelectButton';
import { SelectOptions } from './SelectOptions';

export function Select({
  items,
  selectedItem = null,
  renderItem = (item) => item,
  onSelect = () => {},
  placeholder = 'Select'
}) {
  return (
    <SelectProvider
      renderItem={renderItem}
      onSelect={onSelect}
      selectedItem={selectedItem}
      items={items}
      placeholder={placeholder}
    >
      <SelectContainer>
        <SelectButton />
        <SelectOptions />
      </SelectContainer>
    </SelectProvider>
  );
}
