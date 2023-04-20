import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Counter from "../Counter/Counter";
import CartContext from "../CartContext/CartContext";
import CartImg from '../../images/icons/icon-cart.svg'

const Cart = ({ cartItems }) => {
  const { updateCartItemQuantity, calculateTotalPrice, clearCart } =
    useContext(CartContext);

  const totalPrice = calculateTotalPrice();

  function shortenProductName(name) {
    const replacements = [
      { search: "Mark", replace: "MK" },
      { search: "Headphones", replace: "" },
      { search: "Speakers", replace: "" },
      { search: "Earphones", replace: "" },
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
      {cartItems.length === 0 ? (
        
        <div className={styles.emptyCartMessage}>
          <img src={CartImg} className={styles.cartIcon} alt='Cart Icon'></img>
          <span>Your cart is empty!</span>
          
          </div>
      ) : (
        <>
      <div className={styles.cartTopRow}>
        <h2>cart</h2>
        <button className={styles.removeBtn} onClick={clearCart}>
          Remove all
        </button>
      </div>

      
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img
                  className={styles.cartThumbnail}
                  src={item.image.desktop}
                  alt={item.name}
                />
                <div className={styles.namePriceContainer}>
                  <span className={styles.productName}>
                    {shortenProductName(item.name)}
                  </span>
                  <span className={styles.productPrice}>$ {item.price}</span>
                </div>
                <Counter
                  quantity={item.quantity}
                  setQuantity={(newQuantity) =>
                    updateCartItemQuantity(item.id, newQuantity)
                  }
                />
              </div>
            ))}
          </div>

          <div className={styles.cartBottomRow}>
            <div className={styles.bottomTop}>
              <span className={styles.totalText}>total</span>
              <span className={styles.totalAmount}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button className={styles.checkoutBtn}>checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
