import React, { useEffect, useState } from "react";


function CartView() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/userprod", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({ id: 2 }),
    })
      .then((res) => res.json())
      .then((data) => setCart(data.Products));
  }, []);
  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <>
      <div>
        <h2>Your Cart</h2>
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Qty: {item.quantity}</p>
            <p>Price: R{item.price}</p>
           
          </div>
        ))}
      </div>
    </>
  );
}

export default CartView;
