import styled from 'styled-components';

export function CrossButton({ onClick }) {
  return (
    <StyledSvg
      onClick={onClick}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12L8 8L12 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4L8 8L12 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  color: #f5f5f5;

  @media only screen and (hover: hover) and (pointer: fine) {
    &:hover {
      color: #83bf46;
    }
  }
`;
