import React, { useState } from "react";
import styles from "./Checkout.module.css";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";

const Checkout = ({cartItems}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "",
    eMoneyNumber: '',
    eMoneyPin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  function shortenProductName(name) {
    const replacements = [
      { search: "Mark", replace: "MK" },
      { search: "Headphones", replace: "" },
      { search: "Speakers", replace: "" },
      { search: "Earphones", replace: "" },
      { search: "Speaker", replace: "" },
    ];

    let shortenedName = name;

    replacements.forEach((item) => {
      const regex = new RegExp(item.search, "gi");
      shortenedName = shortenedName.replace(regex, item.replace);
    });

   

    return shortenedName.toUpperCase();
  }

  return (
    <div>
      <Header />
      <div className={styles.checkout}>
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <h2>billing details</h2>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <h3>billing details</h3>

            <label htmlFor="address">Your Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="zip">ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <h3>Payment Details</h3>
            <label htmlFor="paymentMethod">Payment Method</label>
            <div className={styles.paymentMethodContainer}>
            <div
                className={`${styles.radioChild} ${
                  formData.paymentMethod === "eMoney" && styles.radioChildChecked
                }`}
                onClick={() => handleChange({ target: { name: "paymentMethod", value: "eMoney" } })}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="eMoney"
                  checked={formData.paymentMethod === "eMoney"}
                  onChange={handleChange}
                />
                <span>e-Money</span>
              </div>
              <div
                className={`${styles.radioChild} ${
                  formData.paymentMethod === "cashOnDelivery" && styles.radioChildChecked
                }`}
                onClick={() => handleChange({ target: { name: "paymentMethod", value: "cashOnDelivery" } })}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={formData.paymentMethod === "cashOnDelivery"}
                  onChange={handleChange}
                />
                <span>Cash on Delivery</span>
              </div>
            </div>
          </div>

          {formData.paymentMethod === "eMoney" && (
            <>
              <div className={styles.formGroup}>
                <label htmlFor="eMoneyNumber">e-Money Number</label>
                <input
                  type="text"
                  name="eMoneyNumber"
                  value={formData.eMoneyNumber}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="eMoneyPin">e-Money PIN</label>
                <input
                  type="text"
                  name="eMoneyPin"
                  value={formData.eMoneyPin}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

<div className={styles.summary}>
          <h4 className={styles.summaryHeading}>Summary</h4>
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
                <div className={styles.quantityContainer}>
                  <span className={styles.checkoutQuantity}>x{item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>


          <button className="btn orange" type="submit">
            continue & pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
