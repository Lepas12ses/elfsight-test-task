import styled from 'styled-components';

export function FieldText({ children }) {
  return (
    <StyledSpan _isPlaceholder={!children}>
      {children ? children : 'Select'}
    </StyledSpan>
  );
}

const StyledSpan = styled.span`
  color: ${({ _isPlaceholder }) => (_isPlaceholder ? '#B3B3B3' : '#f5f5f5')};
  font-size: 16px;
`;
