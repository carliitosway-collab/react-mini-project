import { useState } from "react";

function AddItemForm({ onAddItem }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedTitle = title.trim();
        const trimmedDescription = description.trim();

        if (!trimmedTitle || !trimmedDescription) {
            return;
        }

        onAddItem({
            title: trimmedTitle,
            description: trimmedDescription,
        });

        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
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

            <button type="submit">Añadir item</button>
        </form>
    );
}

export default AddItemForm;
