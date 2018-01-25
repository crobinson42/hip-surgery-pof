import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Camera from './containers/Camera'
import ImageContainer from './containers/ImageContainer'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      imageUrl: '',
      takePicture: true,
    }
  }

  static childContextTypes = {
    getImageUrl: PropTypes.string,
    setImageUrl: PropTypes.func,
    takePicture: PropTypes.func,
  }

  getChildContext = () => ({
    getImageUrl: this.state.imageUrl,
    setImageUrl: imageUrl => this.setState({ imageUrl, takePicture: false, }),
    takePicture: (takePicture = true) => this.setState({ takePicture, })
  })

  render () {
    if (this.state.takePicture)
      return (
        <Camera />
      )

    return <ImageContainer />
  }
}

export default App

