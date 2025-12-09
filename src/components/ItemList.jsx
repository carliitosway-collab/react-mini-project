import ItemCard from "./ItemCard";

function ItemList({ products, onDeleteProduct }) {
    return (
        <div className="amazon-grid">
            {products.map((product) => (
                <ItemCard
                    key={product.id}
                    product={product}
                    onDeleteProduct={onDeleteProduct}
                />
            ))}
        </div>
    );
}

export default ItemList;
