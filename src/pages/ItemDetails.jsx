import { useParams, Link } from "react-router-dom";
import UpdateItemForm from "../components/UpdateItemForm";

function ItemDetails({ products, onUpdateProduct }) {
    const { id } = useParams();
    const product = products.find((p) => String(p.id) === id);

    if (!product) {
        return (
            <section>
                <h1>Producto no encontrado</h1>
                <Link to="/">Volver</Link>
            </section>
        );
    }

    return (
        <section>
            <h1>{product.title}</h1>

            <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "300px", borderRadius: "12px" }}
            />

            <p>{product.description}</p>

            <p>Precio: <strong>💲 {product.price}</strong></p>
            <p>Rating: ⭐ {product.rating}</p>
            <p>Stock: {product.stock}</p>

            <h3>Galería:</h3>
            <div style={{ display: "flex", gap: "10px" }}>
                {product.images?.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="foto"
                        style={{ width: "120px", borderRadius: "8px" }}
                    />
                ))}
            </div>

            <UpdateItemForm products={products} onUpdateProduct={onUpdateProduct} />

            <p>
                <Link to="/">← Volver al dashboard</Link>
            </p>
        </section>
    );
}

export default ItemDetails;
