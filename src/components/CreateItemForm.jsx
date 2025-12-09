import { useState } from "react";

function CreateItemForm({ onAddProduct }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        stock: "",
        thumbnail: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onAddProduct(formData);


        setFormData({
            title: "",
            description: "",
            price: "",
            stock: "",
            thumbnail: "",
        });
    };

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <div className="form-grid">
                <div className="form-field">
                    <label htmlFor="title">Título</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Nombre del producto"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="price">Precio (€)</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Precio"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="stock">Stock</label>
                    <input
                        id="stock"
                        name="stock"
                        type="number"
                        placeholder="Cantidad"
                        value={formData.stock}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="thumbnail">Imagen principal (URL)</label>
                    <input
                        id="thumbnail"
                        name="thumbnail"
                        type="text"
                        placeholder="https://imagen.jpg"
                        value={formData.thumbnail}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-field full">
                    <label htmlFor="description">Descripción</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Descripción del producto"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <button type="submit" className="btn-primary">
                Crear producto
            </button>
        </form>
    );
}

export default CreateItemForm;
