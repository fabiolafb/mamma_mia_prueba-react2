import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container className="error">
      <h2 className="mb-4">⛔ Error, esa ruta no existe ⛔</h2>

      <Link to="/"  style={{ color: "black", fontSize: "1.1rem"  }}><h2>Volver al inicio</h2></Link>
    </Container>
  );
}
