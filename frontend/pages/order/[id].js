import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import NavbarS3 from "../../components/NavbarS3/NavbarS3";
import PageTitle from "../../components/pagetitle/PageTitle";
import OrderSection from "../../components/order/OrderSection";
import FooterS3 from "../../components/footerS3/FooterS3";
import CursorMaus from "../../components/CursorMaus/CursorMaus";

const OrderPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.sanskritisutracreations.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProduct(data.data);
      });
  }, [id]);

  return (
    <Fragment>
      <NavbarS3 hclass={"header-section-2 style-two"} />

      <PageTitle pageTitle={product?.title || "Book Order"} pagesub={"Order"} />

      <OrderSection productId={id} product={product} />

      <FooterS3 />
      <CursorMaus />
    </Fragment>
  );
};

export default OrderPage;
