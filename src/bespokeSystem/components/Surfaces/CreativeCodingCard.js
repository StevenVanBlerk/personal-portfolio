import { Card } from '@/designSystem'
import { useEffect, useState } from 'react'

export const CreativeCodingCard = ({ children, ...otherProps }) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isDisplayingChildren, setIsDisplayingChildren] = useState(false)

  useEffect(() => {
    if (isEnabled) setTimeout(() => setIsDisplayingChildren(true), 400)
    if (!isEnabled) setIsDisplayingChildren(false)
  }, [isEnabled])
  return (
    <Card {...otherProps}>
      {' '}
      <button
        style={{ color: 'black' }}
        onClick={() => {
          setIsEnabled((prevState) => !prevState)
        }}
      >
        {isEnabled ? 'disable' : 'enable'}
      </button>
      <div
        style={{
          height: isEnabled ? '500px' : '0px',
          width: isEnabled ? '500px' : '0px',
          transition: 'width 0.4s, height 0.4s',
        }}
      >
        {isDisplayingChildren && children}
      </div>
    </Card>
  )
}
