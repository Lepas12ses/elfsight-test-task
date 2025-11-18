import styled from 'styled-components';

export function ArrowButton({ isExpanded = false }) {
  return (
    <StyledSvg
      _isExpanded={isExpanded}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  color: ${({ _isExpanded }) => (_isExpanded ? '#FFFFFF' : '#B2B2B2')};
  transform: ${({ _isExpanded }) => (_isExpanded ? 'rotate(180deg)' : 'none')};
`;
