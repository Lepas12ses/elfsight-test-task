import styled from 'styled-components';
import { useSelectContext } from './SelectContext';

export function FieldText({ children }) {
  const { placeholder } = useSelectContext();

  return (
    <StyledSpan _isPlaceholder={!children}>
      {children ? children : placeholder}
    </StyledSpan>
  );
}

const StyledSpan = styled.span`
  color: ${({ _isPlaceholder }) => (_isPlaceholder ? '#B3B3B3' : '#f5f5f5')};
  font-size: 16px;
`;
