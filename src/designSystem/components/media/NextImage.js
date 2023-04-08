import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
  position: relative;
  height: ${({ height }) => height && `${height}px`};
  width: ${({ width }) => width && `${width}px`};
`

export const NextImage = ({
  src,
  alt,
  fill,
  height,
  width,
  wrapperClassName,
  className,
  ...otherProps
}) => {
  return (
    <Wrapper className={wrapperClassName} height={height} width={width}>
      <Image
        src={src}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        alt={alt}
        className={className}
        {...otherProps}
      />
    </Wrapper>
  )
}
