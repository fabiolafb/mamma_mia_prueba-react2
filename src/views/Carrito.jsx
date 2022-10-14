import React from "react";
import ContextPizzeria from "../ContextPizzeria";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/carrito.css";

export default function Carrito() {
  const { sumarCarrito, agregar, quitar, vaciarCarrito } = useContext(ContextPizzeria);

  const total = sumarCarrito.reduce(
    (valorAnterior, { count, price }) => (valorAnterior + price * count),
    0
  );


  const navigate = useNavigate();
  return (
    <>
      <div className="carrito p-5">
        <h3 className="detalle-del-pedido">Detalle del pedido:</h3>
        {sumarCarrito.map((pe, i) => (
          <div key={i} className="contenedor-carrito">
            <div className="listado-carrito">
              <div className="foto-pizza-nombre">
                <img
                  src={pe.img}
                  alt=""
                  className="src-carrito"
                  onClick={() => navigate(`/pizza/${pe.id}`)}
                />
                <h4 className="name-carrito">
                  {pe.name[0].toUpperCase() + pe.name.substring(1)}
                </h4>
              </div>
              <div className="precio-btns-masmenos">
                <h5 className="resumen-cadapizza">
                  {(pe.price * pe.count).toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                  })}{" "}
                </h5>
                <button className="btn-btn-danger" onClick={() => quitar(i)}>
                  -
                </button>
                <h4 className="mx-2">{pe.count}</h4>
                <button className="btn-btn-primary" onClick={() => agregar(i)}>
                  +
                </button>
              </div>
            </div>
            <hr className="hr-carrito" />
          </div>
        ))}

        <div className="total-precio">
          <h2 className="total-txt">
            {" "}
            Total:{" "}
            {total.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </h2>

          <div className="btns-carrito">
            <button className="btn-irapagar">Ir a pagar </button>
            <button className="btn-vaciar" id="vaciar-carrito" onClick={vaciarCarrito}>Vaciar carrito </button>
          </div>
        </div>
      </div>
    </>
  );
}
