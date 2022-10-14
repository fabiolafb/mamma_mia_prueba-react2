import CardCatalogo from "../components/CardCatalogo";
import imghome from "../assets/img/img_home.jpg";
import "../assets/css/home.css";

export default function Home() {

  return (
    <div>
      <div className="contenedor">
        <div className="div-titulo-img">
          <h1 className="titulo-principal">
            <b> ¡Pizzería Mamma Mia! </b>
          </h1>
          <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
          <hr className="hr-titulo"/>
        </div>
        <img src={imghome} alt="" className="imghome" />
      </div>
      <CardCatalogo />
    </div>
  );
}
