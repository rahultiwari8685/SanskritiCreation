import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Link from "next/link";

const Product = ({ item }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // 🔥 IMAGE URL
  const imageUrl = item?.thumbnail
    ? `https://api.sanskritisutracreations.com/uploads/images/${item.thumbnail}`
    : "/no-image.png";

  return (
    <div className="row g-5">
      {/* 🔥 IMAGE SECTION */}
      <div className="col-lg-6">
        <div className="product-image-items">
          <div className="tab-content">
            <div className="product-image">
              <Zoom>
                <img
                  src={imageUrl}
                  alt={item?.title || "product"}
                  className="w-100"
                />
              </Zoom>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 DETAILS SECTION */}
      <div className="col-lg-6">
        <div className="product-details-content">
          {/* ⭐ RATING (STATIC FOR NOW) */}
          <div className="star pb-4">
            <span>-5%</span>
            {[...Array(5)].map((_, i) => (
              <Link key={i} onClick={ClickHandler} href="#">
                <i className="fas fa-star"></i>
              </Link>
            ))}
            <Link onClick={ClickHandler} href="#" className="text-color">
              ( 2 Reviews )
            </Link>
          </div>

          {/* 🔥 TITLE */}
          <h3 className="pb-4">{item?.title}</h3>

          {/* 🔥 DESCRIPTION FROM API */}
          <div className="mb-4">
            {item?.content?.blocks?.map((block, i) => (
              <p key={i}>{block?.data?.text}</p>
            ))}
          </div>

          {/* 💰 PRICE */}
          <div className="price-list d-flex align-items-center">
            <span>₹{item?.price}</span>
          </div>

          {/* 🎨 CATEGORY */}
          <h6 className="details-info">
            <span>Category:</span>{" "}
            {item?.categories?.map((cat) => cat.name).join(", ")}
          </h6>

          {/* 🚀 BOOK ORDER BUTTON */}
          <div className="cart-wrp mt-4">
            <div className="shop-button d-flex align-items-center">
              <Link href={`/order/${item?._id}`} className="theme-btn">
                📦 Book Order
              </Link>

              <Link href="#" className="star-icon">
                <i className="fal fa-star"></i>
              </Link>
            </div>
          </div>

          {/* EXTRA INFO */}
          <h6 className="details-info mt-3">
            <span>Product ID:</span> {item?._id}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Product;
