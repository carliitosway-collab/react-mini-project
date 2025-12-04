import { useState } from "react";
import itemsData from "../data/items.json";
import ItemCard from "./ItemCard";

function ItemList() {
    const [items, setItems] = useState(itemsData);

    const handleDelete = (idToDelete) => {
        const filtered = items.filter((item) => item.id !== idToDelete);
        setItems(filtered);
    };

    return (
        <div>
            <h2>Lista de Items</h2>

            {items.length === 0 && <p>No hay items disponibles.</p>}

            {items.map((item) => {
                return (
                    <ItemCard
                        key={item.id}
                        item={item}
                        onDelete={handleDelete}
                    />
                );
            })}
        </div>
    );
}

export default ItemList;
