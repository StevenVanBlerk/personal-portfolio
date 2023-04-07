import '@/styles/globals.css'
import styled from 'styled-components'
import { colors } from '@/designSystem/constants/colors'
import { StarryBackground } from '@/bespokeSystem/components'

const Main = styled.main`
  text-align: center;
  background-color: ${colors.CHARCOAL};
  /* background: transparent; */
  /* height: auto; */
  color: white;
  padding: 0px 0 200px 0;
  /* z-index: 1; */
`

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <StarryBackground>
        <Component {...pageProps} />
      </StarryBackground>
    </Main>
  )
}

export default MyApp
