import styled from 'styled-components';

export function Input(props) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  background: #263750;
  border: 1px solid #83bf46;
  min-width: 240px;
  width: fit-content;
  padding: 12px 16px;
  border-radius: 8px;
  color: #f5f5f5;
  outline: none;
  text-overflow: ellipsis;
  font-size: 16px;

  &::placeholder {
    color: #b3b3b3;
  }

  &:hover,
  &:focus {
    background: #334466;
  }
`;
