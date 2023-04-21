import React from "react";
import styles from "./Counter.module.css";

const Counter = ({
  quantity,
  setQuantity,
  containerClassName,
  buttonClassName,
  inputClassName,
}) => {
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={`${styles.counter} ${containerClassName}`}>
      <button onClick={decrementQuantity} className={`${styles.counterBtn} ${buttonClassName}`} >-</button>
      <input
        className={`${styles.counterInput} ${inputClassName}`}
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={incrementQuantity} className={`${styles.counterBtn} ${buttonClassName}`}>+</button>
    </div>
  );
};

export default Counter;
