import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateItemForm({ products = [], onUpdateProduct }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const productId = Number(id);


    if (!Array.isArray(products)) {
        return <p>Cargando productos...</p>;
    }

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <p>No se encontró el producto con id {id}</p>;
    }

    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedProduct = {
            ...product,
            title,
            description,
            price,
        };

        onUpdateProduct(updatedProduct);

        navigate("/");
    };

    return (
        <section>
            <h1>Editar producto</h1>

            <form onSubmit={handleSubmit}>
                <label>Título:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Descripción:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label>Precio:</label>
                <input
                    type="number"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button type="submit">Guardar cambios</button>
            </form>
        </section>
    );
}

export default UpdateItemForm;
