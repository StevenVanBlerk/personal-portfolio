import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors } from '@/designSystem/constants/colors'
import { Container } from '@/bespokeSystem/components'

export const StarryBackground = ({
  starCount = 1000,
  //white x3, blue, red, orange
  starColors = [
    '#f0f0f0',
    '#f0f0f0',
    '#f0f0f0',
    '#5681B9',
    '#C34731',
    '#EAA27F',
  ],
  enabled = true,
  children,
}) => {
  const stars = [...Array(starCount).keys()]

  return (
    <>
      <StarsContainer>
        <motion.svg style={{ width: '100%', height: '100%' }}>
          {enabled &&
            stars.map((i) => {
              const left = Math.floor(Math.random() * 10000) / 100 //0 -> 100 with 2 decimal places
              const top = Math.floor(Math.random() * 10000) / 100 //0 -> 100 with 2 decimal places
              // const delay = Math.floor(Math.random() * 1000) / 1000; //0 -> 1 with 3 decimal places
              const delay = i / starCount // 0.000 -> 0.999 in increments of 0.001 (if default star count)
              const color =
                starColors[Math.floor(Math.random() * starColors.length)]
              return (
                <motion.circle
                  key={i}
                  cy={`${top}vh`}
                  cx={`${left}vw`}
                  r="0.8"
                  stroke={color}
                  strokeWidth="0"
                  fill={color}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 0.7, 0.5] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.2,
                    delay: delay,
                  }}
                />
              )
            })}
        </motion.svg>
      </StarsContainer>
      <Container position="relative">{children}</Container>
    </>
  )
}

const StarsContainer = styled((props) => <Container {...props} />)`
  background: ${colors.DARK_CHARCOAL};
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 0;
`
