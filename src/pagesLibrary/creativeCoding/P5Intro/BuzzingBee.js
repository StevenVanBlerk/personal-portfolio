import React from 'react'
import dynamic from 'next/dynamic' // https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr importing p5 requires window to be available, and it isn't when server side rendering (NextJS).
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

export const BuzzingBee = (props) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef)
  }

  const draw = (p5) => {
    p5.clear()
    var x = p5.width * p5.noise(xOff1_BuzzingBee)
    var y = p5.height * p5.noise(xOff2_BuzzingBee)
    p5.ellipse(x, y, 24, 24)

    xOff1_BuzzingBee += 0.02
    xOff2_BuzzingBee += 0.02
  }

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <Sketch setup={setup} draw={draw} />
    </div>
  )
}

let xOff1_BuzzingBee = 0
let xOff2_BuzzingBee = 10000

function drawBuzzingBee() {
  background(51)
  var x = width * noise(xOff1_BuzzingBee)
  var y = height * noise(xOff2_BuzzingBee)
  ellipse(x, y, 24, 24)

  xOff1_BuzzingBee += 0.02
  xOff2_BuzzingBee += 0.02
}

// ---

function setup() {
  createCanvas(200, 200)
  framerate = createP('')
}

function draw() {
  framerate.html(p5.floor(frameRate()))
  drawBuzzingBee()
}
