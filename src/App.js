import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { withContext } from 'recompose'
import Camera from './Camera'

class App extends Component {
  static propTypes = {}

  render () {
    return (
      <Camera />
    )
  }
}

const enhance = withContext(
  childContextTypes = {
    image: PropTypes.string, // URL string object
  },
  getChildContext = props => ({
    image //todo: where is the top level context state going to live?
  }),
)

export default enhance(App)
