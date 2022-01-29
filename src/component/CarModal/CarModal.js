import React from "react";
import propType from "prop-types";
function CarModal({ setSelectedCar, title, desc }) {
  return (
    <>
      <div className="modal d-block">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                className="btn-close"
                onClick={() => setSelectedCar(null)}
              ></button>
            </div>
            <div className="modal-body">
              <p>{desc}</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedCar(null)}
              >
                Dissmiss
              </button>
              <button className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
}
CarModal.defaultProps = {};
CarModal.propType = {
  toggleModal: propType.func.isRequired,
  title: propType.string,
  desc: propType.string,
};
export default CarModal;
