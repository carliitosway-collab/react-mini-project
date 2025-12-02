import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside
            style={{
                width: "180px",
                padding: "10px",
                backgroundColor: "#f4f4f4",
                borderRight: "1px solid #ddd",
                minHeight: "100vh",
            }}
        >
            <nav>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBotton: "8px" }}>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
