import React from 'react'
import { Line as CanvasLine } from 'react-konva'

const Line = ({ points, ...rest }) => (
  <CanvasLine
    dash={[5]}
    points={points}
    stroke="#17a2b8"
    strokeWidth={5}
    {...rest}
  />
)

export default Line
