import React from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartTopRow}>
        <h2>cart</h2>
        <button className={styles.removeBtn}>Remove all</button>
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
