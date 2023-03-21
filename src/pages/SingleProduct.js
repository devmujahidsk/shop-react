import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { Link } from "react-router-dom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
const SingleProduct = () => {
  const props = {
    width: 500,
    height: 500,
    zoomWidth: 600,
    // zoomLensStyle: "opacity:0.4, background-color: red;",
    zoomPosition: "right",
    img: "https://images.pexels.com/photos/9896948/pexels-photo-9896948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <section className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div className="gallery-images">
                  <img
                    className="img-fluid"
                    src="../images/watch-1.jpg"
                    alt="watch1"
                  />
                </div>
                <div className="gallery-images">
                  <img
                    className="img-fluid"
                    src="../images/watch-1.jpg"
                    alt="watch1"
                  />
                </div>
                <div className="gallery-images">
                  <img
                    className="img-fluid"
                    src="../images/watch-1.jpg"
                    alt="watch1"
                  />
                </div>
                <div className="gallery-images">
                  <img
                    className="img-fluid"
                    src="../images/watch-1.jpg"
                    alt="watch1"
                  />
                </div>
                <div className="gallery-images">
                  <img
                    className="img-fluid"
                    src="../images/watch-1.jpg"
                    alt="watch1"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="title-border-bottom">
                  <h3 className="product-title">
                    Kids headphones 10 pack multi-colored for students
                  </h3>
                </div>
                <div className="title-border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={15}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-reviews">(120 Reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="title-border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="mb-0 product-tags">Type:</h3>
                    <p className="mb-0 product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="mb-0 product-tags">Brand:</h3>
                    <p className="mb-0 product-data">Rolex</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="mb-0 product-tags">Category:</h3>
                    <p className="mb-0 product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="mb-0 product-tags">Tags:</h3>
                    <p className="mb-0 product-data">Mujahid</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="mb-0 product-tags">Availability:</h3>
                    <p className="mb-0 product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="mb-0 product-tags">Size:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="mb-0 product-tags">Color:</h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-15 align-items-center flex-row mt-2 mb-3">
                    <h3 className="mb-0 product-tags">Quantity:</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        Add to Cart
                      </button>
                      <button to="/signup" className="button border-0 signup">
                        Buy it Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="#">
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum officiis illo tenetur blanditiis? Nihil ducimus autem
                  blanditiis beatae maiores, accusantium velit cupiditate fugit
                  placeat, dicta quam in facere consectetur illum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* review section start */}
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 id="review">Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Base on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <Link
                        className="text-dark text-decoration-underline"
                        to=""
                      >
                        Write a Review
                      </Link>
                    </div>
                  )}
                </div>
                <div className="review-form mt-3 py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>

                    <div>
                      <textarea
                        className="form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Write your Review here"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Mujahid Shaikh</h6>
                      <ReactStars
                        count={5}
                        size={15}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Illum officiis illo tenetur blanditiis? Nihil ducimus
                      autem blanditiis beatae maiores, accusantium velit
                      cupiditate fugit placeat, dicta quam in facere consectetur
                      illum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* review section end */}
      {/* Popular collection start */}
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      {/* Popular collection section end */}
    </>
  );
};

export default SingleProduct;
