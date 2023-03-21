import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-8">
              <div className="cart-header d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="product-image-cart">
                    <img
                      className="img-fluid"
                      src="../images/watch-1.png"
                      alt="prodcut-cart-img"
                    />
                  </div>
                  <div>
                    <p className="mb-0">Samsung Galaxy M40</p>
                    <p className="mb-0">Color: Sky Blue</p>
                    <p className="mb-0">Size: L</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <MdDeleteForever className="delete-cart" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$100</h5>
                </div>
              </div>
              <div className="cart-data d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="product-image-cart">
                    <img
                      className="img-fluid"
                      src="../images/watch-1.png"
                      alt="prodcut-cart-img"
                    />
                  </div>
                  <div>
                    <p className="mb-0">Samsung Galaxy M40</p>
                    <p className="mb-0">Color: Sky Blue</p>
                    <p className="mb-0">Size: L</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <MdDeleteForever className="delete-cart" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$100</h5>
                </div>
              </div>
              <div className="cart-data d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="product-image-cart">
                    <img
                      className="img-fluid"
                      src="../images/watch-1.png"
                      alt="prodcut-cart-img"
                    />
                  </div>
                  <div>
                    <p className="mb-0">Samsung Galaxy M40</p>
                    <p className="mb-0">Color: Sky Blue</p>
                    <p className="mb-0">Size: L</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <MdDeleteForever className="delete-cart" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$100</h5>
                </div>
              </div>
            </div>
            <div className="col-4 py-2">
              <div className="cart-collaterals">
                <div className="cart_totals">
                  <h2 className="total-title">Cart Totals</h2>
                  <div className="total-all-price-wrap">
                    <h4 className="sub-total border-bottom mb-2 py-2 border-1">
                      SubTotal: $1000
                    </h4>
                    <p className="mb-0 border-bottom mb-3 py-2 border-1">
                      Taxes & Shipping calculated at Checkout page
                    </p>
                    <Link to="/checkout" className="button">
                      Proceed To Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
