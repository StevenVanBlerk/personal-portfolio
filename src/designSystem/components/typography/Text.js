import styled from 'styled-components'

export const Text = styled((props) => (
  <span
    as={props.semantic}
    children={props.children}
    className={props.className}
  />
))`
  font-size: 19px;
  margin: 0;
`
