import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Webcam from '../components/react-webcam'
import { getContext } from 'recompose'

class CameraComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cameras: [],
    }
  }

  componentWillMount() {
    // todo: needs to be finished - iPad debugging needed
    navigator.mediaDevices.enumerateDevices().then(devices => {
      const cameras = devices
        .filter(d => d.kind === 'videoinput')
        .map(d => d.deviceId)

      this.setState({
        cameras,
      })
    })
  }

  takePicture = () => {
    this.props.setImageUrl(this.camera.getScreenshot())
  }

  renderCameraDevices = () => {}

  render() {
    // todo: allow selection of different cameras ie: iPad front/back
    // navigator.mediaDevices.enumerateDevices().then(devices => console.log(devices))
    return (
      <div onClick={this.takePicture} style={style.container}>
        <Webcam
          audio={false}
          height="100%"
          ref={cam => (this.camera = cam)}
          screenshotFormat="image/jpeg"
          width="100%"
        />

        {this.renderCameraDevices()}
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
