import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Webcam from 'react-webcam'
import { getContext } from 'recompose'

class CameraComponent extends Component {
  takePicture = () => {
    this.props.setImageUrl(
      this.camera.getScreenshot()
    )
  }

  render() {
    return (
      <div onClick={this.takePicture} style={style.container}>
        <Webcam
          audio={false}
          height="100%"
          ref={cam => (this.camera = cam)}
          screenshotFormat="image/jpeg"
          width="100%"
        />
      </div>
    )
  }
}

const style = {
  container: {
    height: window.innerHeight,
    position: 'fixed',
    width: window.innerWidth,
  },
  preview: {
    position: 'relative',
  },
}

export default getContext({
  setImageUrl: PropTypes.func,
})(CameraComponent)
