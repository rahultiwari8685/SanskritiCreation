import React, { useState } from "react";

const OrderSection = ({ productId, product }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    size: "",
    color: "",
  });

  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productId", productId);

    Object.keys(form).forEach((key) => formData.append(key, form[key]));

    if (logo) formData.append("logo", logo);

    try {
      setLoading(true);

      const res = await fetch(
        "https://api.sanskritisutracreations.com/api/orders",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      if (data.success) {
        alert("Order Submitted ✅");
        window.location.href = "/";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="checkout-section section-padding section-bg-2">
      <div className="container">
        {/* 🔥 PRODUCT SUMMARY */}
        {product && (
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4>🛒 Ordering: {product.title}</h4>
            <p>Price: ₹{product.price}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            {/* LEFT SIDE */}
            <div className="col-md-5 col-lg-4">
              <div className="checkout-radio">
                <p className="primary-text">Product Options</p>

                <select
                  name="size"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>

                <input
                  type="text"
                  name="color"
                  placeholder="Color"
                  className="form-control mb-3"
                  onChange={handleChange}
                />

                <input
                  type="file"
                  placeholder="Upload Logo"
                  className="form-control"
                  onChange={handleFile}
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-md-7 col-lg-8">
              <div className="checkout-single-wrapper">
                <div className="checkout-single boxshado-single">
                  <h4>Customer Details</h4>

                  <div className="checkout-single-form">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          color="primary"
                          name="name"
                          placeholder="Full Name"
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-lg-6">
                        <input
                          type="email"
                          name="email"
                          color="primary"
                          placeholder="Email"
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-lg-12">
                        <input
                          type="text"
                          name="phone"
                          color="primary"
                          placeholder="Phone Number"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* SUBMIT */}
                <div className="checkout-single checkout-single-bg">
                  <div className="mt-4">
                    <button className="theme-btn" disabled={loading}>
                      {loading ? "Submitting..." : "📦 Place Order"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderSection;
