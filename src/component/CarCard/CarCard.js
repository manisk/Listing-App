import React from "react";
import propTypes from "prop-types";
function CarCard({ img, title, description, price, setSelectedCar }) {
  return (
    <div className="card shadow-sm">
      <img src={img} alt={title} />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title" style={{ color: "blue" }}>
            ₹{price}
          </h5>
        </div>

        <div
          className="btn btn-secondary w-100 mt-3"
          onClick={() => {
            setSelectedCar({
              title: title,
              description: description,
              img: img,
            });
          }}
        >
          Show Detail
        </div>
      </div>
    </div>
  );
}

CarCard.defaultProps = {
  title: "Car Title",
  description: "It is a nice car.",
};
CarCard.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string,
  description: propTypes.string,
};
export default CarCard;
