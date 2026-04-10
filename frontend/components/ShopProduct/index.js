import React, { useEffect, useState } from "react";
import Link from "next/link";

const ShopProduct = ({ products }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 12;

  const totalResults = products.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + resultsPerPage,
  );

  const [activeTab, setActiveTab] = useState("Tab1");

  useEffect(() => {
    setActiveTab("Tab1");
  }, []);

  return (
    <section className="shop-page-section fix section-padding section-bg-2">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-12 col-lg-12">
            {/* TOP BAR */}
            <div className="woocommerce-notices-wrapper">
              <p>
                Showing <span>{resultsPerPage}</span> of {totalResults} Results
              </p>

              <div className="form-clt">
                <div className="icon">
                  <button
                    className={`tab ${activeTab === "Tab1" ? "active" : ""}`}
                    onClick={() => setActiveTab("Tab1")}
                  >
                    <i className="fas fa-list"></i>
                  </button>
                </div>
                <div className="icon">
                  <button
                    className={`tab ${activeTab === "Tab2" ? "active" : ""}`}
                    onClick={() => setActiveTab("Tab2")}
                  >
                    <i className="fas fa-th-large"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* GRID VIEW */}
            <div className="row">
              {currentProducts.length > 0 &&
                currentProducts.map((product) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={product._id}
                    style={{ display: activeTab === "Tab1" ? "block" : "none" }}
                  >
                    <div className="product-box-items">
                      <div className="product-image">
                        <img
                          src={`https://api.sanskritisutracreations.com/uploads/images/${product.thumbnail}`}
                          alt={product.title}
                        />

                        <div className="shop-btn">
                          <Link
                            onClick={ClickHandler}
                            href={`/shop-details/${product._id}`}
                            className="theme-btn"
                          >
                            Show Details
                          </Link>
                        </div>
                      </div>

                      <div className="product-content">
                        <h6>
                          <Link
                            onClick={ClickHandler}
                            href={`/shop-details/${product._id}`}
                          >
                            {product.title}
                          </Link>
                        </h6>
                        <span>₹{product.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* LIST VIEW */}
            <div className="row">
              {currentProducts.length > 0 &&
                currentProducts.map((product) => (
                  <div
                    className="col-lg-6 col-md-12"
                    key={product._id}
                    style={{ display: activeTab === "Tab2" ? "block" : "none" }}
                  >
                    <div className="product-box-items">
                      <div className="product-image">
                        <img
                          src={`https://api.sanskritisutracreations.com/uploads/images/${product.thumbnail}`}
                          alt={product.title}
                        />

                        <div className="shop-btn">
                          <Link
                            onClick={ClickHandler}
                            href={`/shop-details/${product._id}`}
                            className="theme-btn"
                          >
                            Show Details
                          </Link>
                        </div>
                      </div>

                      <div className="product-content">
                        <h6>
                          <Link
                            onClick={ClickHandler}
                            href={`/shop-details/${product._id}`}
                          >
                            {product.title}
                          </Link>
                        </h6>
                        <span>₹{product.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* PAGINATION */}
            <div className="page-nav-wrap mt-5 text-center">
              <ul>
                <li>
                  <button
                    className="page-numbers"
                    onClick={() =>
                      handlePageChange(Math.max(1, currentPage - 1))
                    }
                    disabled={currentPage === 1}
                  >
                    <i className="fa-solid fa-chevrons-left"></i>
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i}>
                    <button
                      className={`page-numbers ${
                        currentPage === i + 1 ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    className="page-numbers"
                    onClick={() =>
                      handlePageChange(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    <i className="fa-solid fa-chevrons-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopProduct;
