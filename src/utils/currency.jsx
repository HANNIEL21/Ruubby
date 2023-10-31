import React from "react";

const Currency = ({ amount, className }) => {
  let priceFormat = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ngn",
  });
  // console.log();

  return <h2 className={className}>{priceFormat.format(amount)}</h2>;
};

export default Currency;
