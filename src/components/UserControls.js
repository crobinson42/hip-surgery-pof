import React from 'react'
import AngleInputs from './AngleInputs'

import './UserControls.css'

const UserControls = ({ retakeHandler }) => (
  <div className="user-controls-container row">
    <div className="d-flex justify-content-around w-100 p-3">
      <AngleInputs />

      <div>
        <button className="btn btn-lg btn-outline-info" onClick={retakeHandler}>
          <i className="fa fa-camera"></i> Retake
        </button>
      </div>
    </div>
    
    <div className="user-controls-backdrop" />
  </div>
)

export default UserControls
