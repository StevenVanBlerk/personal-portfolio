import { BuzzingBee } from './_BuzzingBee'
import { Card, FlexGrid, VerticalGrid } from '@/designSystem'
import { P5Demo } from './_P5Demo'
const CreativeCoding = () => {
  return (
    <div>
      Creative coding showcase
      <VerticalGrid gapSize="large">
        <Card header="Buzzing bee (perlin noise)">
          <BuzzingBee />
        </Card>
        <Card header="Buzzing bee (perlin noise)">
          <P5Demo />
        </Card>
      </VerticalGrid>
    </div>
  )
}

export default CreativeCoding
