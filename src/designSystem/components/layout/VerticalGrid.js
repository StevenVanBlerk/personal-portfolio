import styled from 'styled-components'
export const VerticalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${({ gapSize }) =>
  gapSize === 'large'
      ? '12px'
      : gapSize === 'medium'
      ? '8px'
      : gapSize === 'small'
      ? '4px'
      : '0px'};
`
