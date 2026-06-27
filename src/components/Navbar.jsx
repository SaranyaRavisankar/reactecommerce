import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const context = useContext(CartContext);

  console.log("Navbar Context:", context);

  const cart = context?.cart || [];

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">
        My Store
      </Link>

      <Link to="/cart" className="btn btn-light">
        Cart ({cart.length})
      </Link>
    </nav>
  );
}

export default Navbar;