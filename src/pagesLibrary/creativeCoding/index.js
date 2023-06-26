import { BuzzingBee } from './P5Intro/BuzzingBee'
import { VerticalGrid } from '@/designSystem'
import MatterSphereCreator from './MatterSphereCreator'
import { CreativeCodingCard } from '@/bespokeSystem/components'

const CreativeCoding = () => {
  return (
    <div>
      Creative coding showcase
      <VerticalGrid gapSize="large">
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
