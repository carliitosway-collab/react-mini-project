import { useState } from "react";

function EditItemForm({ initialTitle, initialDescription, onSave, onCancel }) {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedTitle = title.trim();
        const trimmedDescription = description.trim();

        if (!trimmedTitle || !trimmedDescription) {
            return;
        }

        onSave({
            title: trimmedTitle,
            description: trimmedDescription,
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
            <h3>Editar item</h3>

            <div>
                <label>
                    Título:{" "}
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    Descripción:{" "}
                    <textarea
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </label>
            </div>

            <button type="submit">Guardar cambios</button>
            <button
                type="button"
                onClick={onCancel}
                style={{ marginLeft: "10px" }}
            >
                Cancelar
            </button>
        </form>
    );
}

export default EditItemForm;
