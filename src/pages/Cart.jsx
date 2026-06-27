import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            className="card p-2 mb-2"
          >
            <h5>{item.title}</h5>
            <p>${item.price}</p>

            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart; //My changes