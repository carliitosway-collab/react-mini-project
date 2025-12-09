import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section>
            <h1>404 - Página no encontrada</h1>
            <p>La ruta que has intentado visitar no existe.</p>
            <Link to="/">Volver al dashboard</Link>
        </section>
    );
}

export default NotFound;
