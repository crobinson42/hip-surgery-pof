import React from 'react'
import { Circle as CanvasCircle } from 'react-konva'

const Circle = ({ x, y, ...rest }) => (
  <CanvasCircle
    draggable={true}
    fill="rgba(255, 255, 255, 0.3)"
    radius={15}
    stroke="#17a2b8"
    x={x}
    y={y}
    {...rest}
  />
)

export default Circle
