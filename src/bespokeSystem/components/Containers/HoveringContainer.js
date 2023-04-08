import { motion } from 'framer-motion'

export const HoveringContainer = ({
  delay = 0,
  duration = 2,
  displacement = -10,
  children,
  ...otherProps
}) => {
  return (
    <motion.div
      initial={{ y: -displacement }}
      animate={{ y: [-displacement, displacement, -displacement] }}
      transition={{ repeat: Infinity, duration: duration, delay: delay }}
      {...otherProps}
    >
      {children}
    </motion.div>
  )
}
