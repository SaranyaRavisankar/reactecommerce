import { useEffect, useState, useContext } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
function Home() {
    const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    //  const [selectedCategory, setSelectedCategory] = useState("");
    // Fetch products when component loads
    useEffect(() => {
        API.get("/products")
            .then((res) => setProducts(res.data));
            // .catch((err) => console.log(err));
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1>Products</h1>

            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="d-flex flex-wrap gap-3">
                {filteredProducts.map((product) => (
                    <div
                        className="card"
                        style={{ width: "18rem" }}
                        key={product.id}
                    >
                        <img
                            src={product.images?.[0] || "https://via.placeholder.com/300"}
                            className="card-img-top"
                            alt={product.title}
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/300";
                            }}
                        />

                        <div className="card-body">
                            <Link
                                to={`/product/${product.id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <h5 className="card-title">{product.title}</h5>
                            </Link>

                            <p className="card-text">${product.price}</p>

                           <button
    className="btn btn-primary"
    onClick={() => addToCart(product)}
>
    Add To Cart
</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;