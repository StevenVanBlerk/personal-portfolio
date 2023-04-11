import { BuzzingBee } from './P5Intro/BuzzingBee'
import { Card, VerticalGrid } from '@/designSystem'
// import LightSwitchCord from './LightSwitchCord'
import MatterSphereCreator from './MatterSphereCreator'
import { CreativeCodingCard } from '@/bespokeSystem/components'

const CreativeCoding = () => {
  return (
    <div>
      Creative coding showcase
      <VerticalGrid gapSize="large">
        {/* <Card header="Light switch" subheader="pull the cord">
          <LightSwitchCord />
        </Card> */}

        <CreativeCodingCard
          header="Making matter"
          subheader="drag along the canvas"
        >
          <MatterSphereCreator />
        </CreativeCodingCard>

        <CreativeCodingCard
          header="Buzzing bee"
          subheader="a 2D perlin noise demo"
        >
          <BuzzingBee />
        </CreativeCodingCard>
      </VerticalGrid>
    </div>
  )
}

export default CreativeCoding
