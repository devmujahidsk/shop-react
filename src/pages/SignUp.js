import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <section className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <CustomInput
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                  />
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                  <CustomInput
                    type="tel"
                    name="mobile"
                    placeholder="Enter your Phone Number"
                  />
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                  />
                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0" type="submit">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
