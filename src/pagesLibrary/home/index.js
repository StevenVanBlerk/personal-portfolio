import { useState } from 'react'
import { ScrollToTopButton, VContainer, Container } from '@/bespokeSystem/components'
import { colors } from '@/designSystem/constants/colors'
import { Heading } from './_Heading'
import { GetInTouch } from './_GetInTouch'
import { TechStack } from './_TechStack'
import { WorkExperience } from './_WorkExperience'
import { Education } from './_Education'

const Home = () => {
  return (
    <>
      <ScrollToTopButton />
      <VContainer gridGap="3rem" padding="1.5rem">
        <Heading />
        {/* <a href="/creativeCoding">Creative coding showcase</a> */}
        {/* <a href="/designSystem">Design system</a> */}
        <TechStack />
        <WorkExperience />
        <Education />
        <GetInTouch />
      </VContainer>
    </>
  )
}

export default Home

/** DEFINITE TO-DOs
 * clean up public/icons folder
 *
 */

/** Potential TO-DOs:

sheldon's idea: 
      - page side navigation thing could be a star constellation instead of a
      branch
      
      - Page: My music (Glass Animals, Oliver Tree, OK:GO, good music
      videos), youtube API integration demo */

/*Rating system idea:
      a bar slider the user can drag to indicate their satisfaction with product/service. bar slider value (0 - 100) determines shape of svg above
      slider. 100= big smile, 0= sad face */

/** Embed Spotify to home page. Allow play of floating through space / interstellar soundtrack
 
 *  */
