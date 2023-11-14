import React from "react";
import Product from "./Product";

export default function Products() {
  const DUMMY_PRODUCTS = [
    {
      id: 1,
      name: "Macbook",
      imageUrl:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 25,
    },
    {
      id: 2,
      name: "Lenovo",
      imageUrl:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 30,
    },
    {
      id: 3,
      name: "Samsung",
      imageUrl:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 35,
    },
    {
      id: 4,
      name: "HP",
      imageUrl:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 40,
    },
    {
      id: 5,
      name: "AOC",
      imageUrl:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 45,
    },
  ];
  return (
    <ul className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {DUMMY_PRODUCTS.map((product) => (
        <li key={product.id}>
          <Product
            id={product.id}
            name={product.name}
            image={product.imageUrl}
            price={product.price}
          />
        </li>
      ))}
    </ul>
  );
}
