import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../App";

const ProductDetails = ({
  deepName = "Samsung",
  deepPrice = 120000,
  deepDescription = "12gb pwer day",
}) => {
  //console.log(deepName, deepPrice, deepDescription);
  // let res=useContext(UserContext)
  let { user } = useContext(UserContext);
  console.log(user);

  return (
    <section>
      <article>
        <h1>UserName : {user.uName}</h1>
        <h1>Age : {user.age}</h1>
        <h1>Email : {user.email}</h1>
      </article>
      <h3>{deepName}</h3>
      <h3>{deepPrice}</h3>
      <h3>{deepDescription}</h3>
    </section>
  );
};

// Correcting defaultProps (Make sure it matches function parameter names)
//ProductDetails.defaultProps = {
//   deepName: "Samsung",
//  deepPrice: 2000,   // Fixed case sensitivity issue
//   deepDescription: "Good"
//};

// Prop types (Also ensuring correct prop names)
ProductDetails.propTypes = {
  deepName: PropTypes.string.isRequired,
  deepPrice: PropTypes.number.isRequired,
  deepDescription: PropTypes.string.isRequired,
};

export default ProductDetails;
