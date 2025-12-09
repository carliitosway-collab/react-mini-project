import { Link } from "react-router-dom";

function ItemCard({ product, onDeleteProduct }) {
    const handleDelete = () => {
        onDeleteProduct(product.id);
    };

    return (
        <article className="amazon-card">
            <div className="amazon-image-wrapper">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="amazon-image"
                />
            </div>

            <div className="amazon-info">
                <h3 className="amazon-title">{product.title}</h3>
                <p className="amazon-price">{product.price} €</p>
                {product.rating && (
                    <p className="amazon-rating">⭐ {product.rating.toFixed(2)}</p>
                )}
            </div>

            <div className="amazon-buttons">
                <Link to={`/items/${product.id}`} className="btn-details">
                    Ver detalles
                </Link>
                <button className="btn-delete" onClick={handleDelete}>
                    Eliminar
                </button>
            </div>
        </article>
    );
}

export default ItemCard;
