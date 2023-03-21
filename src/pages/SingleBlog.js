import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <h3>A Beautiful Sunday Morning Renaissance</h3>
                <img src="../images/blog-1.jpg" alt="blog-img" />
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </p>
                <Link className="d-flex align-items-center gap-10" to="/blogs">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go to Blogs page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
