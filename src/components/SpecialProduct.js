import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-4 mb-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img
              className="img-fluid"
              src="./images/watch-1.jpg"
              alt="watch1"
            />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havells</h5>
            <h6 className="title">Samsung Galaxy Note10+ Mobile Phone...</h6>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100</span>&nbsp;<strike>$200</strike>
            </p>
            <div className="discount-till align-items-center">
              <div className="d-flex gap-10 align-items-center">
                <p className="mb-0">
                  <b>5 </b>days
                </p>
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>
              </div>
              <div className="prod-count my-3">
                <p>Products: 5</p>
                <div class="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "25%" }}
                  />
                </div>
              </div>
            </div>
            <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
