import React, { useEffect, useState } from "react";
import Link from "next/link";

const ShopProduct = ({ products = [], categories = [] }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // 🔥 STATES
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Tab1");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const resultsPerPage = 12;

  // 🔥 CATEGORY FILTER
  const filteredProducts = selectedCategory
    ? products.filter((p) =>
        p.categories?.some((c) => c._id === selectedCategory),
      )
    : products;

  const totalResults = filteredProducts.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const startIndex = (currentPage - 1) * resultsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + resultsPerPage,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setActiveTab("Tab1");
  }, []);

  return (
    <section className="shop-page-section fix section-padding section-bg-2">
      <div className="container">
        <div className="row g-4">
          {/* 🔥 SIDEBAR WITH CATEGORY */}
          <div className="col-xl-3 col-lg-4 order-2 order-md-1">
            <div className="p-3 bg-white shadow-sm rounded">
              <h5>Categories</h5>

              <ul className="list-unstyled mt-3">
                <li>
                  <button
                    className="btn btn-sm btn-outline-dark mb-2"
                    onClick={() => setSelectedCategory(null)}
                  >
                    All
                  </button>
                </li>

                {categories.map((cat) => (
                  <li key={cat._id}>
                    <button
                      className="btn btn-sm btn-outline-primary mb-2"
                      onClick={() => setSelectedCategory(cat._id)}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 🔥 PRODUCTS */}
          <div className="col-xl-9 col-lg-8 order-1 order-md-2">
            {/* HEADER */}
            <div className="woocommerce-notices-wrapper">
              <p>
                Showing <span>{currentProducts.length}</span> of {totalResults}{" "}
                Results
              </p>

              <div className="form-clt">
                <button
                  className={`tab ${activeTab === "Tab1" ? "active" : ""}`}
                  onClick={() => setActiveTab("Tab1")}
                >
                  <i className="fas fa-th"></i>
                </button>

                <button
                  className={`tab ${activeTab === "Tab2" ? "active" : ""}`}
                  onClick={() => setActiveTab("Tab2")}
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>

            {/* 🔥 GRID VIEW */}
            <div className="row">
              {currentProducts.map((product) => (
                <div
                  className="col-lg-4 col-md-6 col-12"
                  key={product._id}
                  style={{ display: activeTab === "Tab1" ? "block" : "none" }}
                >
                  <div className="product-box-items">
                    <div className="product-image">
                      <img src={product.proImg} alt={product.title} />

                      {/* 🔥 ACTION BUTTONS */}
                      <ul className="product-icon d-grid align-items-center">
                        <li>
                          <Link href={`/product/${product._id}`}>👁</Link>
                        </li>
                      </ul>

                      {/* 🔥 BOOK ORDER */}
                      <div className="shop-btn">
                        <Link
                          href={`/order/${product._id}`}
                          className="theme-btn"
                        >
                          📦 Book Order
                        </Link>
                      </div>
                    </div>

                    <div className="product-content">
                      <h6>
                        <Link href={`/product/${product._id}`}>
                          {product.title}
                        </Link>
                      </h6>

                      <span>₹{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 🔥 LIST VIEW */}
            <div className="row">
              {currentProducts.map((product) => (
                <div
                  className="col-lg-12"
                  key={product._id}
                  style={{ display: activeTab === "Tab2" ? "block" : "none" }}
                >
                  <div className="product-box-items d-flex align-items-center">
                    <img
                      src={product.proImg}
                      alt={product.title}
                      style={{ width: "120px", marginRight: "20px" }}
                    />

                    <div>
                      <h5>{product.title}</h5>
                      <p>₹{product.price}</p>

                      <Link
                        href={`/order/${product._id}`}
                        className="theme-btn"
                      >
                        📦 Book Order
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 🔥 PAGINATION */}
            <div className="page-nav-wrap mt-5 text-center">
              <ul>
                <li>
                  <button
                    onClick={() =>
                      handlePageChange(Math.max(1, currentPage - 1))
                    }
                    disabled={currentPage === 1}
                  >
                    ⬅
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i}>
                    <button
                      className={currentPage === i + 1 ? "active" : ""}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={() =>
                      handlePageChange(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    ➡
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
