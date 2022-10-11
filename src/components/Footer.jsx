import React from "react";
import "../assets/css/Footer.css";
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";

const Footer = () => {
  return (
    <footer>
      <h4 class="parr_edit">Síguenos en nuestras redes sociales </h4>
      <div class="i-rrss">
        <img
          src={instagram}
          alt=""
          className="logo_rrss"
          data-toggle="tooltip"
          data-placement="top"
          title="Instagram Mamma Mía"
        />
        <img
          src={facebook}
          alt=""
          className="logo_rrss"
          data-toggle="tooltip"
          data-placement="top"
          title="Facebook Mamma Mía"
        />
      </div>
    </footer>
  );
};
export default Footer;
