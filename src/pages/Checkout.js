import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title="Checkout" />
      <section className="checkout-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Shop Karo App</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item total-price">
                      <Link to="/cart" className="text-dark">
                        Cart
                      </Link>
                      &nbsp; /
                    </li>
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Information
                    </li>
                    &nbsp; /<li className="breadcrumb-item">Shipping</li>
                    &nbsp; /
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total"> Contact Information</h4>
                <h4 className="user-details mb-3">RECIPIENTS DETAILS</h4>
                <form
                  action=""
                  className="d-flex flex-wrap gap-15 justify-content-between"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, Suite, etc..."
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip Code"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-2" />
                        Return to Cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex align-items-center gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "0px" }}
                        className="badge bg-secondary text-white px-2 py-2 rounded-circle p-3 position-absolute"
                      >
                        1
                      </span>
                      <img
                        className="img-fluid"
                        src="../images/watch-1.jpg"
                        alt="watch"
                      />
                    </div>
                    <div>
                      <h5 className="total-price">Samsung Galaxy</h5>
                      <p className="total-price">samsung galaxy s10 pro</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">SubTotal</p>
                  <p className="total-price">$ 1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$ 1000</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$ 1000</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      Senior Management Recruiters, Senior Management Search Firms
    </>
  );
};

export default Checkout;
