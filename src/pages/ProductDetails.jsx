import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.get(`/products/${id}`)
      .then((res) => setProduct(res.data));
    //   .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-3">
        Back
      </Link>

      <div className="card p-3">
        <img
          src={product.images?.[0]}
          alt={product.title}
          style={{
            maxWidth: "400px",
            margin: "auto"
          }}
        />

        <div className="mt-3">
          <h2>{product.title}</h2>

          <p>{product.description}</p>

          <h3>${product.price}</h3>

          <button className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;