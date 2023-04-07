import styled from 'styled-components'
import { colors } from '@/designSystem/constants/colors'
const Container = styled.div`
  position: fixed;
  color: ${colors.GREEN};
  /* background: pink; */
  display: flex;
  flex-direction: column;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
`

const Node = styled.button`
  background-color: ${colors.DARK_GREEN};
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 0;
  padding: 0;
  outline: 0;
`

const Branch = styled.div`
  background-color: ${colors.LIGHT_GREEN};
  width: 20px;
  height: 100px;
  align-self: center;
`

export const ContentsBar = () => {
  return (
    <Container>
      <Node />
      <Branch />
      <Node />
      <Branch />
      <Node />
    </Container>
  )
}
