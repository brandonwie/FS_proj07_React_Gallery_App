import React from "react";
import Img from "../images/404.jpg";
const PageNotFound = () => (
  <li className="not-found">
    <h3>Page Not Found</h3>
    <p>
      <img src={Img} style={{ width: "100%" }} alt="error" />
    </p>
  </li>
);

export default PageNotFound;
