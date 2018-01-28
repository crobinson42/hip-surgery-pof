import React from 'react'
import PropTypes from 'prop-types'
import { getContext } from 'recompose'
import AngleChangeInputModal from './AngleChangeInputModal'

const AngleInputs = ({ inklinationAngle }) => (
  <div className="text-info py-2">
    <AngleChangeInputModal />

    <span className="lead px-3">Inklination Angle: {inklinationAngle}°</span>

    <button className="btn btn-sm btn-outline-light" data-toggle="modal" data-target="#inklinationModal">Set Angle</button>
  </div>
)

export default getContext({ inklinationAngle: PropTypes.number })(AngleInputs)
