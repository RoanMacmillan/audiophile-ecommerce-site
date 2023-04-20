import React from "react";
import styles from "./Counter.module.css";

const Counter = ({ quantity, setQuantity }) => {
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <button onClick={decrementQuantity}>-</button>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={incrementQuantity}>+</button>
    </div>
  );
};

export default Counter;
