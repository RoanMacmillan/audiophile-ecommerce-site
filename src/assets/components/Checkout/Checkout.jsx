import React, { useState } from "react";
import styles from "./Checkout.module.css";
import Header from "../Header/Header";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
                className={styles.radioChild}
                onClick={() =>
                  setFormData({ ...formData, paymentMethod: "eMoney" })
                }
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
                className={styles.radioChild}
                onClick={() =>
                  setFormData({ ...formData, paymentMethod: "cashOnDelivery" })
                }
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
          <button className="btn orange" type="submit">
            continue & pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
