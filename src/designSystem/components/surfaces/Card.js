import styled from 'styled-components'
import { Header3, colors } from '@/designSystem'

const OuterCard = styled.div`
  display: grid;
  row-gap: ${({ gapSize }) =>
    gapSize === 'huge'
      ? '32px'
      : gapSize === 'large'
      ? '16px'
      : gapSize === 'medium'
      ? '12px'
      : '8px'};
  padding: 12px;
  justify-content: center;
  text-align: center;
  background: ${colors.DARK_CHARCOAL};
  border: 5px solid ${colors.LIGHT_CHARCOAL};
  border-radius: 3px;
`

const Footer = styled.footer`
  margin-top: auto;
`

export const Card = ({ header, footer, gapSize, children }) => {
  return (
    <OuterCard gapSize={gapSize}>
      {!!header && <Header3>{header}</Header3>}
      {!!children && <section>{children}</section>}
      {!!footer && <Footer>{footer}</Footer>}
    </OuterCard>
  )
}
