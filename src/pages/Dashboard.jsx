import CreateItemForm from "../components/CreateItemForm";
import ItemList from "../components/ItemList";

function Dashboard({ products, onAddProduct, onDeleteProduct }) {
    return (
        <section>
            <h1>Dashboard</h1>
            <p>Bienvenido al panel de administración.</p>

            <h2>Crear nuevo producto</h2>
            <CreateItemForm onAddItem={onAddProduct} />

            <h2>Lista de productos</h2>
            <ItemList products={products} onDeleteProduct={onDeleteProduct} />
        </section>
    );
}

export default Dashboard;
