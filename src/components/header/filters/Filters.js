import styled from 'styled-components';
import { Select } from '../../select';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { useData } from '../../providers/DataProvider';

export function Filters() {
  return (
    <StyledContainer>
      <Select placeholder="Status" />
      <Select placeholder="Gender" />
      <Select placeholder="Species" />
      <Input placeholder="Name" />
      <Input placeholder="Type" />
      <StyledControls>
        <Button width="100%" color="#83BF46">
          Apply
        </Button>
        <Button width="100%" color="#FF5152">
          Reset
        </Button>
      </StyledControls>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledControls = styled.div`
  display: flex;
  gap: 10px;
`;
