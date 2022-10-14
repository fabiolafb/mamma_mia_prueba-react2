import ContextPizzeria from "../ContextPizzeria";
import { useContext, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import carrito from "../assets/img/carrito.png";
import "../assets/css/navbar.css";

export default function Navigation() {
  //const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  const { sumarCarrito } = useContext(ContextPizzeria);

  const total = sumarCarrito.reduce(
    (valorAnterior, { count, price }) => valorAnterior + price * count,
    0
  );
  let sum = 0;

  return (
    <>
      <Navbar
        bg=""
        variant="light"
        className="color_navbar navbar-expand-lg fixed-top"
      >
        <Container className="justify-content-star">
          <div className="menu_principal text-capitalize">
            <img src={logo} alt="" className="logo_navbar" />
            <Link to="/" className="text-dark ms-1 text-decoration-none">
              <b>Pizzería Mamma Mia!</b>
            </Link>
            <Link to="/" className="text-light ms-3 text-decoration-none">
              Catálogo
            </Link>
          </div>

          <div className="div_carrito  ms-5">
            {/* Corregir que sume todo el circulo rojo */}
            <Link to="/carrito" className="" id="carrito">
              <img
                src={carrito}
                alt=""
                className="logo_carrito"
                data-toggle="tooltip"
                data-placement="top"
                title="Ir a carrito"
              />
              {sumarCarrito.map((pe, i) => (
                <span
                  id="cart_menu_num"
                  data-action="cart-can"
                  className="badge-rounded-circle"
                >
                  {(sum = sum + pe.count)}
                </span>
              ))}
            </Link>
            <Link to="/carrito">
              <h4
                className="precio-total"
                data-toggle="tooltip"
                data-placement="top"
                title="Ir a carrito"
              >
                {total.toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </h4>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
