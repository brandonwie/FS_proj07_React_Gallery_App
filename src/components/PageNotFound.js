import React from "react";
import Img from "../images/404.jpg";
const PageNotFound = () => (
  <li className="not-found">
    <h3>Page Not Found</h3>
    <p>
      <img
        src={Img}
        style={{
          width: "80%",
          border: "2px solid #2B2D2F",
        }}
        alt="error"
      />
    </p>
  </li>
);

export default PageNotFound;
