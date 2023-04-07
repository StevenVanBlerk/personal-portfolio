import '../src/styles/globals.css'

/** unoptimizing all NextImages
 * Everywhere that the Next.js Image component is used, images are served from a /_next-prefixed path.
 * We want to utilize Next Image's prop APIs and attributes, but we don't want to require that the Next.js dev server be running.
 * https://storybook.js.org/blog/get-started-with-storybook-and-next-js/
 */
import * as NextImage from 'next/image'
const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
