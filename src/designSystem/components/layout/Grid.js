import styled from 'styled-components'

const getGridGap = (size) =>
  (size = 'huge'
    ? '18px'
    : size === 'large'
    ? '12px'
    : size === 'medium'
    ? '8px'
    : size === 'small'
    ? '4px'
    : '0px')

export const Grid = styled.div`
  display: grid;
  grid-gap: ${({ size }) => getGridGap(size)};

  //minmax only matters for extreme edge case of extremely narrow screen
  grid-template-columns: ${({ columnMaxWidth = '250px' }) =>
    `repeat(auto-fit, minmax(0px, 250px))`};

  /* using max-width to allow for specifying a max column count (optional) */
  max-width: ${({ maxColumns, columnMaxWidth = '250px', size }) =>
    maxColumns
      ? `calc((${columnMaxWidth} * ${maxColumns}) + (${getGridGap(
          size,
        )} * (${maxColumns} - 1)))`
      : undefined};

  margin: auto;
  place-content: center;
`
