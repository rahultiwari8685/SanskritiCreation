import React, { useEffect, useState } from "react";
import Link from "next/link";

import NavbarS3 from "../../components/NavbarS3/NavbarS3";
import PageTitle from "../../components/pagetitle/PageTitle";
import FooterS3 from "../../components/footerS3/FooterS3";
import CtaSectionS2 from "../../components/CtaSectionS2/CtaSectionS2";
import CursorMaus from "../../components/CursorMaus/CursorMaus";

const ShopPage = () => {
  const API = "https://api.sanskritisutracreations.com";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const resultsPerPage = 12;

  // GET PRODUCTS
  const getProducts = async () => {
    try {
      const res = await fetch(`${API}/api/products/getAllProducts`);
      const data = await res.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // GET CATEGORIES
  const getCategories = async () => {
    try {
      const res = await fetch(`${API}/api/categories/getAllCategory`);
      const data = await res.json();
      if (data.success) {
        setCategories(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  // FILTER
  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.categories?.some((c) => c._id === activeTab));

  // PAGINATION
  const totalPages = Math.ceil(filteredProducts.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + resultsPerPage,
  );

  return (
    <>
      <NavbarS3 hclass="header-section-2 style-two" />

      <PageTitle pageTitle="Shop" pagesub="Products" />

      <section className="shop-page-section section-padding">
        <div className="container">
          {/* CATEGORY FILTER */}
          <div className="product-header text-center mb-4">
            <ul className="nav justify-content-center">
              <li>
                <button
                  className={activeTab === "all" ? "active" : ""}
                  onClick={() => {
                    setActiveTab("all");
                    setCurrentPage(1);
                  }}
                >
                  All
                </button>
              </li>

              {categories.map((cat) => (
                <li key={cat._id}>
                  <button
                    className={activeTab === cat._id ? "active" : ""}
                    onClick={() => {
                      setActiveTab(cat._id);
                      setCurrentPage(1);
                    }}
                  >
                    {cat.name.replace(/"/g, "")}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS GRID */}
          <div className="row">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <div className="col-xl-3 col-lg-4 col-md-6" key={product._id}>
                  <div className="feature-product-items-2">
                    {/* IMAGE */}
                    <div className="product-image">
                      <img
                        src={`${API}/uploads/images/${product.thumbnail}`}
                        alt={product.title}
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="product-content">
                      <h4>{product.title}</h4>
                      <p className="price">₹{product.price}</p>

                      {product.categories?.length > 0 && (
                        <small>
                          {product.categories
                            .map((c) => c.name.replace(/"/g, ""))
                            .join(", ")}
                        </small>
                      )}

                      <div className="mt-2">
                        <Link
                          href={`/shop-details/${product._id}`}
                          className="theme-btn"
                        >
                          Show Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No Products Found</p>
            )}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="page-nav-wrap mt-5 text-center">
              <ul>
                <li>
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Prev
                  </button>
                </li>

                {[...Array(totalPages)].map((_, i) => (
                  <li key={i}>
                    <button
                      className={currentPage === i + 1 ? "active" : ""}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <CtaSectionS2 />
      <FooterS3 />
      <CursorMaus />
    </>
  );
};

export default ShopPage;
