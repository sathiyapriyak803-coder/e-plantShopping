
import React from "react";

function CartItem({ items = [], removeItem, updateQuantity }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="shopping-cart">
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty. Start shopping for plants!</p>
      ) : (
        <>
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <h2>{item.name}</h2>
              <p>Price: ${Number(item.price).toFixed(2)}</p>

              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity?.({
                      id: item.id,
                      quantity: Number(e.target.value),
                    })
                  }
                />
              </label>

              <p>
                Subtotal: $
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button onClick={() => removeItem?.(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Cart Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </main>
  );
}

export default CartItem;
