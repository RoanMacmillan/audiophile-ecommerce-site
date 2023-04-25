import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Counter from "../Counter/Counter";
import CartContext from "../CartContext/CartContext";
import CartImg from "../../images/icons/icon-cart.svg";
import { useNavigate } from "react-router-dom";
import useIntersectionObserver from "../useIntersectionObserver/useIntersectionObserver";

const Cart = ({ cartItems }) => {

  const [cartRef, cartVisible] = useIntersectionObserver();

  const navigate = useNavigate();

  const enableScrolling = () => {
    document.body.style.overflow = "auto";
  };

  const handleCheckout = () => {
    enableScrolling();
    navigate("/checkout");
  };

  const { updateCartItemQuantity, calculateTotalPrice, clearCart } =
    useContext(CartContext);

  const totalPrice = calculateTotalPrice();

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  function shortenProductName(name) {
    const replacements = [
      { search: "Mark", replace: "MK" },
      { search: "Headphones", replace: "" },
      { search: "Speakers", replace: "" },
      { search: "Earphones", replace: "" },
      { search: "Speaker", replace: "" },
      { search: "Wireless", replace: "wls" },
    ];

    let shortenedName = name;

    replacements.forEach((item) => {
      const regex = new RegExp(item.search, "gi");
      shortenedName = shortenedName.replace(regex, item.replace);
    });

    return shortenedName.toUpperCase();
  }

  return (
    // <div className={styles.cart}>
      <div ref={cartRef} className={`${styles.cart} ${cartVisible ? styles.fadeInLoad : styles.hidden}`}>

      {cartItems.length === 0 ? (
        <div className={styles.emptyCartMessage}>
          <img src={CartImg} className={styles.cartIcon} alt="Cart Icon"></img>
          <span>Your cart is empty!</span>
        </div>
      ) : (
        <>
          <div className={styles.cartTopRow}>
            <h2>
              cart<span>({getTotalQuantity()})</span>
            </h2>
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
                  containerClassName={styles.cartCounter} // Add custom class name for container
                  buttonClassName={styles.cartCounterBtn} // Add custom class name for buttons
                  inputClassName={styles.cartCounterInput} // Add custom class name for input
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
            <button onClick={handleCheckout} className={styles.checkoutBtn}>
              checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
