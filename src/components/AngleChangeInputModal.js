import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getContext } from 'recompose'

class AngleChangeInputModal extends Component {
  close = () => {
    this.props.setInklinationAngle(
      +this.input.value
    )

    window.jQuery('#inklinationModal').modal('hide')
  }

  render () {
    return (
      <div className="modal" id="inklinationModal" >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Set Inklination Angle</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="d-flex flex-column align-items-center">
                <label htmlFor="angle">
                  Angle
                </label>
                <input type="text" className="form-control col-sm-2" defaultValue={this.props.inklinationAngle} id="angle" ref={el => this.input = el}/>
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-info" onClick={this.close}>Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default getContext({
  inklinationAngle: PropTypes.number,
  setInklinationAngle: PropTypes.func,
})(AngleChangeInputModal)
