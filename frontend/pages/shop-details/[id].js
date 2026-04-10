import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import NavbarS3 from "../../components/NavbarS3/NavbarS3";
import PageTitle from "../../components/pagetitle/PageTitle";
import CtaSectionS2 from "../../components/CtaSectionS2/CtaSectionS2";
import FooterS3 from "../../components/footerS3/FooterS3";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import { addToCart } from "../../store/actions/action";

import Product from "./product";
import ProductTabs from "./alltab";

const ProductSinglePage = (props) => {
  const router = useRouter();
  const { id } = router.query;

  const { addToCart } = props;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH PRODUCT FROM API
  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://api.sanskritisutracreations.com/api/products/${id}`,
        );
        const data = await res.json();

        if (data.success) {
          setProduct(data.data);
        }
      } catch (error) {
        console.error("Fetch product error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <Fragment>
      <NavbarS3 hclass={"header-section-2 style-two"} />

      <PageTitle
        pageTitle={product?.title || "Loading..."}
        pagesub={"Product Single"}
      />

      <section className="product-details-section section-padding section-bg-2">
        <div className="container">
          <div className="product-details-wrapper">
            {/* 🔄 LOADING */}
            {loading && <p>Loading product...</p>}

            {/* ✅ PRODUCT */}
            {product && <Product item={product} addToCart={addToCart} />}

            {/* <ProductTabs product={product} /> */}
          </div>
        </div>
      </section>

      <CtaSectionS2 />
      <FooterS3 />
      <CursorMaus />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.data.products,
  };
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
