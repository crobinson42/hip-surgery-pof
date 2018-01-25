import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getContext } from 'recompose'

import UserControls from '../components/UserControls'

class ImageContainer extends Component {
  componentDidMount () {
    this.img.src = this.props.getImageUrl
  }

  render () {
    return (
      <div className="d-flex justify-content-center">
        <img
          style={style.captureImage}
          ref={img => this.img = img}
          alt="The Hip!"
        />

        <UserControls
          retakeHandler={this.props.takePicture}
        />
      </div>
    )
  }
}

const style = {
  captureImage: {
    height: window.innerHeight,
    // width: window.innerWidth,
  },
}

export default getContext({
  getImageUrl: PropTypes.string,
  takePicture: PropTypes.func,
})(ImageContainer)
