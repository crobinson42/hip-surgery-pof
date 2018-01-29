import React from 'react'
import { Line as CanvasLine } from 'react-konva'

const Line = ({ points }) => (
  <CanvasLine
    dash={[5]}
    points={points}
    stroke="#17a2b8"
  />
)

export default Line
