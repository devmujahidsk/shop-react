import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import { services } from "../utils/Data";
const Home = () => {
  return (
    <>
      <Meta title={"Electronic Shop"} />
      {/* section home 1 start */}
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="./images/main-banner-1.jpg"
                  alt="banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>ipad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="./images/catbanner-01.jpg"
                    alt="banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>ipad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="./images/catbanner-02.jpg"
                    alt="banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>ipad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="./images/catbanner-03.jpg"
                    alt="banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>ipad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="./images/catbanner-04.jpg"
                    alt="banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>ipad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section home 1 end */}
      {/* section home 2 */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {services?.map((i, j) => {
                  return (
                    <div className="d-flex align-items-center gap-15" key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="./images/camera.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section home 2 */}

      {/* featured collection start */}
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      {/* featured collection section end */}
      {/* famous collection section start */}
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card bg-dark position-relative">
                <img
                  className="img-fluid"
                  src="./images/famous-watch.png"
                  alt="dark-img"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-white">Big Screen</h5>
                  <h6 className="text-white">Smart Watch Series 7</h6>
                  <p className="text-white">
                    From $399 or $16.62/mo. for 24 mo.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="./images/famous-watch.png"
                  alt="dark-img"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">
                    From $399 or $16.62/mo. for 24 mo.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="./images/famous-watch.png"
                  alt="dark-img"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">
                    From $399 or $16.62/mo. for 24 mo.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="./images/famous-watch.png"
                  alt="dark-img"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">
                    From $399 or $16.62/mo. for 24 mo.*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* famous collection section end */}
      {/* special-wrapper section start */}
      <section className="special-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      {/* special-wrapper section end */}

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

      {/* marquee section wrappper */}
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="./images/brand-01.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-02.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-03.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-04.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-05.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-06.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-07.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/brand-08.png" alt="brands" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* marquee section wrappper */}

      {/* blog section start */}
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
      {/* blog section end */}
    </>
  );
};

export default Home;
