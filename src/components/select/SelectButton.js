import styled from 'styled-components';
import { useSelectContext } from './SelectContext';
import { FieldText } from './FieldText';
import { CrossButton } from './CrossButton';
import { ArrowButton } from './ArrowButton';
import { useCallback } from 'react';

export function SelectButton() {
  const {
    isExpanded,
    toggle,
    renderItem,
    selectedItem,
    onSelect
  } = useSelectContext();

  const isSelected = selectedItem !== null;

  const crossClick = useCallback(
    (e) => {
      e.stopPropagation();

      onSelect(null);
    },
    [onSelect]
  );

  return (
    <StyledButton _isExpanded={isExpanded} onClick={toggle}>
      <FieldText>{isSelected ? renderItem(selectedItem) : undefined}</FieldText>
      {isSelected ? (
        <CrossButton onClick={crossClick} />
      ) : (
        <ArrowButton isExpanded={isExpanded} />
      )}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: ${({ _isExpanded }) => (_isExpanded ? '#334466' : '#263750')};
  border: 1px solid #83bf46;
  padding: 12px 16px;
  border-radius: 8px;
  color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media only screen and (hover: hover) and (pointer: fine) {
    &:hover {
      background: #334466;
    }
  }
`;
