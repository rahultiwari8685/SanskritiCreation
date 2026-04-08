import { useRouter } from "next/router";
import { useState } from "react";

const OrderPage = () => {
  const router = useRouter();
  const { id } = router.query;

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
    formData.append("productId", id);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("size", form.size);
    formData.append("color", form.color);
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
        alert("Order submitted successfully!");
        router.push("/");
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
    <div className="container mt-5">
      <h2>Book Order</h2>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

        <select
          name="size"
          className="form-control mb-3"
          onChange={handleChange}
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
          className="form-control mb-3"
          onChange={handleFile}
        />

        <button className="btn btn-primary" disabled={loading}>
          {loading ? "Submitting..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
