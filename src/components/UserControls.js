import React from 'react'
import AngleInputs from './AngleInputs'

import './UserControls.css'

const UserControls = ({ invertImage, retakeHandler }) => (
  <div className="user-controls-container row">
    <div className="d-flex justify-content-around w-100 p-3">
      <AngleInputs />

      <div>
        <button className="btn btn-lg btn-outline-info" onClick={retakeHandler}>
          <i className="fa fa-camera"></i> Retake
        </button>
        {' '}
        <button className="btn btn-lg btn-info" onClick={invertImage}>
          <i className="fa fa-image"></i> Invert
        </button>
      </div>
    </div>
    
    <div className="user-controls-backdrop" />
  </div>
)

export default UserControls
