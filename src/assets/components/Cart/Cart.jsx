import React from "react";
import styles from "./Cart.module.css";
import Counter from "../Counter/Counter";

const Cart = ({ cartItems }) => {

  function shortenProductName(name) {
    const replacements = [
      { search: "Mark", replace: "MK" },
      { search: "Headphones", replace: "HP" },
      { search: "Speakers", replace: "SP" },
      { search: "Earphones", replace: "EP" },
    ];
  
    let shortenedName = name;
  
    replacements.forEach((item) => {
      const regex = new RegExp(item.search, "gi");
      shortenedName = shortenedName.replace(regex, item.replace);
    });
  
    return shortenedName.toUpperCase();
  }

  


  return (
    <div className={styles.cart}>
      <div className={styles.cartTopRow}>
        <h2>cart</h2>
        <button className={styles.removeBtn}>Remove all</button>
      </div>

      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img className={styles.cartThumbnail} src={item.image.desktop} alt={item.name} />
            <div className={styles.namePriceContainer}>
            <span className={styles.productName}>{shortenProductName(item.name)}</span>            
            <span className={styles.productPrice}>$ {item.price}</span>
            </div>
            <Counter quantity={item.quantity} setQuantity={() => {}} />
          </div>
        ))}
      </div>

      <div className={styles.cartBottomRow}>
        <div className={styles.bottomTop}>
          <span className={styles.totalText}>total</span>
          <span className={styles.totalAmount}>$4444</span>
        </div>
        <button className={styles.checkoutBtn}>checkout</button>
      </div>
    </div>
  );
};

export default Cart;
