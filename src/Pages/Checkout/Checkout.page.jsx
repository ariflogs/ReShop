import React from "react";
import { Container } from "semantic-ui-react";

import LogoBar from "../../Components/Navbar/LogoBar/LogoBar.Component";
import CheckoutSummary from "../../Components/Checkout/CheckoutSummary/CheckoutSummary.Component";
import CheckoutItems from "../../Components/Checkout/CheckoutItems/CheckoutItems.Component";
import StripeButton from "../../Components/StripeButton/StripeButton.Component";

const Checkout = () => {
  return (
    <>
      <LogoBar />
      <Container fluid>
        <div className="checkout">
          <CheckoutSummary />
          <CheckoutItems />
          <StripeButton />
        </div>
      </Container>
    </>
  );
};

export default Checkout;
