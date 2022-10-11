import ContextPizzeria from "../ContextPizzeria";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom"; //estado que recibe el valor sleccionado (id)
import "../assets/css/descripcionPizza.css";
import carrito from "../assets/img/carrito.png";
import cerrar from "../assets/img/cerrar.png";
import { Card } from "react-bootstrap";

export default function Descripcion() {
  //const [selectPizza, setSelectPizza] = useState({});
  const { pizzas, agregarCarrito, sumarCarrito, agregar, quitar } =
    useContext(ContextPizzeria);
  const { id } = useParams();

  const pizzaId = pizzas.find((pizza) => pizza.id === id);
  console.log(pizzaId);

  const total = sumarCarrito.reduce(
    (valorAnterior, { count, price }) => (valorAnterior + price) * count,
    0
  );

  return (
    <>
      {pizzaId && (
        <Card>
          <div className="card-description-pizza">
            <img src={pizzaId.img} alt="" className="src" />
            <div className="contenedor-card-2">
              <h1 className="name-pizza-catalogo-desc">
                Pizza{" "}
                {pizzaId.name[0].toUpperCase() + pizzaId.name.substring(1)}
              </h1>
              <hr className="linea-2-card-2" />
              <p>{pizzaId.desc}</p>
              <h3 className="ingredientes-desc">
                <b>Ingredientes:</b>
              </h3>
              <ul className="ul-desc">
                {pizzaId.ingredients?.map((i) => (
                  <li key={i}>🍕 {i[0].toUpperCase() + i.substring(1)} </li>
                ))}
              </ul>
              <div className="d-flex">
                <h1 className="">
                  Precio{" "}
                  {pizzaId.price.toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                  })}
                </h1>
                {/* {sumarCarrito.map((pe, i) => (
                <div className="precio-btns-masmenos-desc">
                  <button
                    className="btn-btn-danger-desc"
                    onClick={() => quitar(i)}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quitar una pizza"
                  >
                    -
                  </button>
                  <h4 className="mx-2-desc">{pe.count}</h4>
                  <button
                    className="btn-btn-primary-desc"
                    onClick={() => agregar(i)}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Agregar una pizza"
                  >
                    +
                  </button>
                </div>))} */}
                <button
                  onClick={() => agregarCarrito(pizzaId)}
                  className="btn-agregar-2"
                >
                  Añadir <img src={carrito} alt="" className="logo_carrito" />
                </button>
              </div>
            </div>
            <Link to="/">
              <img
                src={cerrar}
                
                alt=""
                className="cerrar"
                data-toggle="tooltip"
                data-placement="top"
                title="Cerrar y volver a catálogo"
              />
            </Link>
          </div>
        </Card>
      )}
    </>
  );
}
