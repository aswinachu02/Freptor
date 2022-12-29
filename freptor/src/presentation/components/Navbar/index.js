import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex max-w-[1440px] mx-auto px-[32px] md:px-[64px] lg:px-[120px] py-[20px]">
      <div className="flex justify-between">
        <img src={process.env.PUBLIC_URL + "logo.svg"} />
        <ul>
          <li>
            <Link to="/Features">Features</Link>
          </li>
          <li>
            <Link to="/Pricing">Pricing</Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
