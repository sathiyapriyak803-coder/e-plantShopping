
import React from "react";

const plants = [
  { id: 1, name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b0b" },
  { id: 2, name: "Peace Lily", price: 20, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee" },
  { id: 3, name: "Monstera", price: 25, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },
  { id: 4, name: "Aloe Vera", price: 12, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
  { id: 5, name: "Succulent", price: 10, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411" },
  { id: 6, name: "Rubber Plant", price: 22, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
];

function ProductList({ addToCart }) {
  return (
    <main className="product-list">
      <h1>Our Plants</h1>
      <div className="products">
        {plants.map((plant) => (
          <article className="product-card" key={plant.id}>
            <img
              src={plant.image}
              alt={plant.name}
              width="180"
              height="160"
            />
            <h2>{plant.name}</h2>
            <p>${plant.price.toFixed(2)}</p>
            <button onClick={() => addToCart?.(plant)}>
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}

export default ProductList;
