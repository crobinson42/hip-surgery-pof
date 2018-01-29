import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Camera from './containers/Camera'
import ImageContainer from './containers/ImageContainer'
import Canvas from './containers/Canvas'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      inklinationAngle: 45,
      imgDimensions: { height: 0, width: 0, },
      imageInverted: false,
      imageUrl: '',
      takePicture: true,
    }
  }

  static childContextTypes = {
    imageUrl: PropTypes.string,
    imgDimensions: PropTypes.object,
    imageInverted: PropTypes.bool,
    inklinationAngle: PropTypes.number,
    invertImage: PropTypes.func,
    setImageDimensions: PropTypes.func,
    setImageUrl: PropTypes.func,
    setInklinationAngle: PropTypes.func,
    takePicture: PropTypes.func,
  }

  getChildContext = () => ({
    imageUrl: this.state.imageUrl,
    imgDimensions: this.state.imgDimensions,
    imageInverted: this.state.imageInverted,
    inklinationAngle: this.state.inklinationAngle,
    invertImage: () => this.setState({ imageInverted: !this.state.imageInverted, }),
    setImageDimensions: imgDimensions => this.setState({ imgDimensions, }),
    setImageUrl: imageUrl => this.setState({ imageUrl, takePicture: false, }),
    setInklinationAngle: inklinationAngle => this.setState({ inklinationAngle, }),
    takePicture: (takePicture = true) => this.setState({ takePicture, }),
  })

  render () {
    if (this.state.takePicture)
      return (
        <Camera />
      )

    return (
      <div>
        <Canvas />
        <ImageContainer />
      </div>
    )
  }
}

export default App

