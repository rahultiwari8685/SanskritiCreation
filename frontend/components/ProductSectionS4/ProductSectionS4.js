import React, { useEffect, useState } from "react";
import Link from "next/link";

const ProductSectionS4 = ({ addToCartProduct }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  // const API = process.env.NEXT_PUBLIC_API_URL;
  const API = "https://api.sanskritisutracreations.com";

  // ✅ GET PRODUCTS
  const getProducts = async () => {
    try {
      const res = await fetch(`${API}/api/products/getAllProducts`);
      const data = await res.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (err) {
      console.error("Product Error:", err);
    }
  };

  // ✅ GET CATEGORIES
  const getCategories = async () => {
    try {
      const res = await fetch(`${API}/api/categories/getAllCategory`);
      const data = await res.json();
      if (data.success) {
        setCategories(data.data);
      }
    } catch (err) {
      console.error("Category Error:", err);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  // ✅ FILTER PRODUCTS BY CATEGORY
  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.categories?.some((c) => c._id === activeTab));

  return (
    <section className="feature-product-section-3 section-padding">
      <div className="container">
        {/* TITLE */}
        <div className="section-title-area">
          <h2>Featured Products</h2>

          {/* CATEGORY TABS */}
          <div className="product-header">
            <ul className="nav">
              {/* ALL */}
              <li>
                <button
                  className={activeTab === "all" ? "active" : ""}
                  onClick={() => setActiveTab("all")}
                >
                  All
                </button>
              </li>

              {/* DYNAMIC CATEGORIES */}
              {categories.map((cat) => (
                <li key={cat._id}>
                  <button
                    className={activeTab === cat._id ? "active" : ""}
                    onClick={() => setActiveTab(cat._id)}
                  >
                    {cat.name.replace(/"/g, "")}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={product._id}>
                <div className="feature-product-items-2">
                  {/* IMAGE */}
                  <div className="product-image">
                    <img
                      src={
                        product.thumbnail
                          ? `${API}/uploads/${product.thumbnail}`
                          : "/default.png"
                      }
                      alt="product"
                    />

                    <ul className="product-icon">
                      <li>
                        <button onClick={() => addToCartProduct(product)}>
                          👁
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* CONTENT */}
                  <div className="product-content">
                    <h4>{product.title}</h4>

                    <p className="price">₹{product.price}</p>

                    {/* CATEGORY NAME */}
                    {product.categories?.length > 0 && (
                      <small>
                        {product.categories
                          .map((c) => c.name.replace(/"/g, ""))
                          .join(", ")}
                      </small>
                    )}

                    {/* VIEW BUTTON */}
                    <div className="mt-2">
                      <Link href={`/product/${product._id}`}>View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No Products Found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSectionS4;
