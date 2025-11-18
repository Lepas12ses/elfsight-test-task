import styled from 'styled-components';
import { useSelectContext } from './SelectContext';
import { useClickOutside } from '../hooks/useClickOutside';

export function SelectOptions() {
  const { isExpanded } = useSelectContext();

  if (!isExpanded) return;

  return <Content />;
}

function Content() {
  const { items, renderItem, onSelect, close } = useSelectContext();
  const containerRef = useClickOutside(close);

  return (
    <StyledContainer ref={containerRef}>
      {items.map((item) => (
        <StyledButton key={item} onClick={() => onSelect(item)}>
          {renderItem(item)}
        </StyledButton>
      ))}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  left: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 1px 4px 0 #0c0c0d0d, 0 1px 4px 0 #0c0c0d1a;
  z-index: 100;
`;

const StyledButton = styled.button`
  width: 100%;
  background: none;
  outline: none;
  border: none;
  padding: 6px 7px;
  text-align: left;
  cursor: pointer;
  font-size: 16px;

  @media only screen and (hover: hover) and (pointer: fine) {
    &:hover {
      background: #83bf4633;
    }
  }
`;
