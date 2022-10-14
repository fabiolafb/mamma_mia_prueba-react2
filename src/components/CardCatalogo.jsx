import ContextPizzeria from "../ContextPizzeria";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/home.css";
import carrito from "../assets/img/carrito.png";

export default function CardCatalogo() {
  const { pizzas, agregarCarrito } = useContext(ContextPizzeria);
  const navigate = useNavigate(); //crear una ruta

  return (
    <div
      className="catalogo grid-columns-4 p-0 col-md-6"
      id="contenedor-catalogo"
    >
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          style={{ width: "18rem" }}
          className="card-catalogo "
        >
          <img
            className="hover"
            src={pizza.img}
            alt=""
            onClick={() => navigate(`/pizza/${pizza.id}`)}
          />

          <div className="card-pizza-catalogo">
            <h2 className="name-pizza-catalogo text-capitalize">
              {" "}
              Pizza {pizza.name[0].toUpperCase() + pizza.name.substring(1)}
            </h2>

            <hr className="linea-1" />

            <h4 className="ingredientes">
              <b>Ingredientes:</b>
            </h4>

            <ul>
              {pizza.ingredients.map((i, index) => (
                <li key={index}>🍕 {i[0].toUpperCase() + i.substring(1)} </li>
              ))}
            </ul>

            <hr className="linea-2" />

            <h1 className="precio">
              {" "}
              {pizza.price.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}
            </h1>

            <div className="btns">
              <button
                to={`/pizza/${pizza.id}`}
                className="btn-ver"
                onClick={() => navigate(`/pizza/${pizza.id}`)}
                data-toggle="tooltip"
                data-placement="top"
                title="Ver detalle de pizza"
              >
                Ver más 👀
              </button>

              <button
                className="btn-agregar"
                onClick={() => agregarCarrito(pizza)}
                data-toggle="tooltip"
                data-placement="top"
                title="Añadir pizza al carrito"
              >
                Añadir <img src={carrito} alt="" className="logo_carrito2" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
