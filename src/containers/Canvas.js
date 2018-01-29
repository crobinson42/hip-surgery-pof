import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getContext } from 'recompose'
import { Stage, Layer } from 'react-konva'

import Circle from '../components/canvas/Circle'
import Line from '../components/canvas/Line'

class Canvas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inkLine: null,
      tearDropRight: null,
      tearDropLeft: null,
    }

    this.canvas = null
  }

  componentDidMount() {
    this.canvas = document.querySelector('canvas')
    this.canvas.style['z-index'] = 1
    this.canvas.addEventListener('mousedown', this.handleCanvasMouseDown)
  }

  curryCircleMoveHandler = key => ({ evt: { layerX, layerY } }) => {
    this.setState({
      [key]: { x: layerX, y: layerY },
    })
  }

  handleCanvasMouseDown = e => {
    const { inkLine: il, tearDropRight: tr, tearDropLeft: tl } = this.state

    if (il && tr && tl) return

    if (!tr) this.setState({ tearDropRight: { x: e.layerX, y: e.layerY } })
    else if (!tl) this.setState({ tearDropLeft: { x: e.layerX, y: e.layerY } })
  }

  handleTearDropLineClick = ({ evt: e }) => {
    if (this.state.inkLine) return
    console.log('e', e)
    this.setState({
      inkLine: { x: e.layerX, y: e.layerY },
    })
  }

  renderInklinationAngle = () => {
    const { inkLine: il } = this.state

    if (!il) return

    // [x,y]
    // todo: trig calcs
    // calculate coordinates for bottom of ink angle to start so it stays on teardrop line
    const start = [il.x, il.y]
    // todo: trig calcs for angle off of the teardrop line
    const end = [il.x + 200, il.y - 200]

    return <Line draggable={true} points={[ ...start, ...end ]} />
  }

  renderTearDrops = () => {
    const { tearDropRight: tr, tearDropLeft: tl } = this.state
    const tearDrops = []

    if (tr) {
      tearDrops.push(
        <Circle
          x={tr.x}
          y={tr.y}
          key="tr"
          onDragMove={this.curryCircleMoveHandler('tearDropRight')}
        />,
      )
    }

    if (tl) {
      tearDrops.push(
        <Circle
          x={tl.x}
          y={tl.y}
          key="tl"
          onDragMove={this.curryCircleMoveHandler('tearDropLeft')}
        />,
      )
    }

    return tearDrops
  }

  renderTearDropLine = () => {
    const { tearDropRight: tr, tearDropLeft: tl } = this.state

    if (tr && tl) {
      const rise = tr.y - tl.y
      const run = tr.x - tl.x

      return (
        <Line
          points={[
            (tl.x - run), (tl.y - rise),
            tl.x, tl.y,
            tr.x, tr.y,
            (tr.x + run), (tr.y + rise),
          ]}
          strokeWidth={!this.state.inkLine ? 10 : 5}
          onClick={this.handleTearDropLineClick}
          onTouchStart={this.handleTearDropLineClick}
        />
      )
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Stage
          height={this.props.imgDimensions.height}
          width={this.props.imgDimensions.width}
        >
          <Layer>
            {this.renderInklinationAngle()}
            {this.renderTearDrops()}
            {this.renderTearDropLine()}
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default getContext({
  imgDimensions: PropTypes.object.isRequired,
})(Canvas)
