function ItemCard({ item, onDelete }) {
    const isLongDescription = item.description.length > 40;

    return (
        <div className="item-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <p>
                Descripción larga:{" "}
                {isLongDescription ? "✔️ Sí" : "❌ No"}
            </p>

            <button onClick={() => onDelete(item.id)}>Eliminar</button>
        </div>
    );
}

export default ItemCard;
