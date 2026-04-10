import React, { Fragment } from "react";
import NavbarS3 from "../../components/NavbarS3/NavbarS3";
import PageTitle from "../../components/pagetitle/PageTitle";
import Contactpage from "../../components/Contactpage/Contactpage";
import CtaSectionS2 from "../../components/CtaSectionS2/CtaSectionS2";
import FooterS3 from "../../components/footerS3/FooterS3";
import CursorMaus from "../../components/CursorMaus/CursorMaus";

const ContactPage = () => {
  return (
    <Fragment>
      <NavbarS3 hclass={"header-section-2 style-two"} />
      <PageTitle pageTitle={"Contact Us"} pagesub={"Contact"} />
      <Contactpage />
      <CtaSectionS2 />
      <FooterS3 />
      <CursorMaus />
    </Fragment>
  );
};
export default ContactPage;
