import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import swal from 'sweetalert'

const DEFAULT_INPUT_TEXT = ''

class AngleInputModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: DEFAULT_INPUT_TEXT,
    }
  }

  changeText(e) {
    let text = e.target.value

    this.setState({
      text,
    })

    swal.setActionValue(text)
  }

  render() {
    return (
      <input value={this.state.text} onChange={this.changeText.bind(this)} />
    )
  }
}

// We want to retrieve AngleInputModal as a pure DOM node:
let wrapper = document.createElement('div')
ReactDOM.render(<AngleInputModal />, wrapper)
let el = wrapper.firstChild

swal({
  text: 'Write something here:',
  content: el,
  buttons: {
    confirm: {
      /*
       * We need to initialize the value of the button to
       * an empty string instead of "true":
       */
      value: DEFAULT_INPUT_TEXT,
    },
  },
}).then(value => {
  swal(`You typed: ${value}`)
})
