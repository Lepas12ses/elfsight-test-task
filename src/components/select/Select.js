import { SelectProvider } from './SelectProvider';
import { SelectContainer } from './SelectContainer';
import { SelectButton } from './SelectButton';
import { SelectOptions } from './SelectOptions';

export function Select({
  items,
  selectedItem = null,
  renderItem = () => {},
  onSelect = () => {}
}) {
  return (
    <SelectProvider
      renderItem={renderItem}
      onSelect={onSelect}
      selectedItem={selectedItem}
      items={items}
    >
      <SelectContainer>
        <SelectButton />
        <SelectOptions />
      </SelectContainer>
    </SelectProvider>
  );
}
