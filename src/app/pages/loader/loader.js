import React from 'react'
import './loader.css'
import { Modal } from 'reactstrap'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles, CirclesWithBar } from 'react-loader-spinner'

const Loader = (props) => {
  const { isActive } = props
  return (
    <div>
      <Modal
        isOpen={isActive}
        className="modal-dialog-centered loader-modal-line"
      >
        <div className="loader-modal text-center">
          <Circles height="100" width="100" Color="white" ariaLabel="loading" />
          <div className="text-white">Loading . . .</div>
        </div>
      </Modal>
    </div>
  )
}

Loader.defaultProps = {
  isActive: true,
}
export default Loader
