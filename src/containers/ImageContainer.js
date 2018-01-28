import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getContext } from 'recompose'

import UserControls from '../components/UserControls'

class ImageContainer extends Component {
  componentDidMount () {
    this.img.src = this.props.imageUrl
  }

  render () {
    const imgStyles = {
      ...style.image,
      filter: this.props.imageInverted ? 'invert()' : '',
    }

    return (
      <div className="d-flex justify-content-center">
        <img
          style={imgStyles}
          ref={img => this.img = img}
          alt="The Hip!"
        />

        <UserControls
          invertImage={this.props.invertImage}
          retakeHandler={this.props.takePicture}
        />
      </div>
    )
  }
}

const style = {
  image: {
    height: window.innerHeight,
    // width: window.innerWidth,
  },
}

export default getContext({
  imageUrl: PropTypes.string,
  imageInverted: PropTypes.bool,
  invertImage: PropTypes.func,
  takePicture: PropTypes.func,
})(ImageContainer)
