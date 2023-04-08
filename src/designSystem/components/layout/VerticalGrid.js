import styled from 'styled-components'
export const VerticalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${({ size }) =>
    size === 'large'
      ? '12px'
      : size === 'medium'
      ? '8px'
      : size === 'small'
      ? '4px'
      : '0px'};
`
