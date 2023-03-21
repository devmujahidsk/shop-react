import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  // console.log(location);
  return (
    <div
      className={`${
        location.pathname === "/product" ? `customGrid-${grid}` : "col-3"
      }`}
    >
      <Link to="id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="../images/wish.svg" alt="wishlist-icon" />
          </Link>
        </div>
        <div className="product-image">
          <img className="img-fluid" src="../images/watch.jpg" alt="watch" />
          <img className="img-fluid" src="../images/watch-1.jpg" alt="watch" />
        </div>
        <div className="product-details">
          <h6 className="brand">Mujahid Havells</h6>
          <h5 className="product-title">
            Kids headphones 10 pack multi-colored for students
          </h5>
          <ReactStars
            count={5}
            value={3}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          <p
            className={`product-description ${
              grid === 12 ? "d-block" : "d-none"
            }`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
            ipsum molestias alias dignissimos quis dicta quod quia officiis
            error ad. Officiis odio aut eum doloremque iusto nisi adipisci
            aperiam doloribus.
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="../images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="../images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="../images/add-cart.svg" alt="add-to-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
