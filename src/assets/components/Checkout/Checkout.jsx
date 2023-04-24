import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Checkout.module.css";
import Header from "../Header/Header";
import CartContext from "../CartContext/CartContext";
import OrangeTick from "../../images/checkout/icon-order-confirmation.svg";

const Checkout = ({ cartItems }) => {
  useEffect(() => {
    // Save the current body background color
    const originalBodyBackgroundColor = document.body.style.backgroundColor;

    const updateBackgroundColor = () => {
      // Check if the screen width is below 1440px
      if (window.matchMedia("(max-width: 1183px)").matches) {
        // Set the body background color to white for screen sizes below 1440px
        document.body.style.backgroundColor = "white";
      } else {
        // Set the desired background color for larger screen sizes
        document.body.style.backgroundColor = "#F2F2F2";
      }
    };

    // Call the updateBackgroundColor function to set the initial background color
    updateBackgroundColor();

    // Add an event listener to update the background color when the window is resized
    window.addEventListener("resize", updateBackgroundColor);

    // Revert back to the original background color and remove the event listener when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBodyBackgroundColor;
      window.removeEventListener("resize", updateBackgroundColor);
    };
  }, []);

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSuccessfulSubmission = () => {
    setShowModal(true);
  };

  const handleBackToHome = () => {
    // Clear the cart
    clearCart();

    // Navigate to the homepage
    navigate("/");
  };

  const navigate = useNavigate();

  const { calculateTotalPrice } = useContext(CartContext);

  const { clearCart } = useContext(CartContext);

  const totalPrice = calculateTotalPrice();
  const shippingCost = 50;
  const grandTotal = totalPrice + shippingCost;

  const totalOtherItems = cartItems.reduce((acc, item, index) => {
    if (index > 0) {
      return acc + item.quantity;
    }
    return acc;
  }, 0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "eMoney",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      handleSuccessfulSubmission();
    }
  };

  const handleGoBack = () => {
    navigate(-1);
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

  // form validation

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid.";
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required.";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required.";
    }

    if (!formData.zip.trim()) {
      errors.zip = "ZIP code is required.";
    }

    if (!formData.city.trim()) {
      errors.city = "City is required.";
    }

    if (!formData.country.trim()) {
      errors.country = "Country is required.";
    }

    if (!formData.paymentMethod.trim()) {
      errors.paymentMethod = "Payment method is required.";
    }

    if (formData.paymentMethod === "eMoney") {
      if (
        !formData.eMoneyNumber.trim() ||
        formData.eMoneyNumber.trim().length !== 10 ||
        !/^\d+$/.test(formData.eMoneyNumber.trim())
      ) {
        errors.eMoneyNumber =
          "e-Money number is required and must be 10 digits.";
      }

      if (
        !formData.eMoneyPin.trim() ||
        formData.eMoneyPin.trim().length !== 4 ||
        !/^\d+$/.test(formData.eMoneyPin.trim())
      ) {
        errors.eMoneyPin = "e-Money PIN is required and must be 4 digits.";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className={styles.checkoutPage}>
      <Header />
      <div className={styles.checkoutBackBtnContainer}>
        <button type="button" className={styles.backBtn} onClick={handleGoBack}>
          Go back
        </button>
      </div>
      <div className={styles.checkout}>
        <form onSubmit={handleSubmit}>
          <div className={styles.desktopCheckoutContainer}>
            <h1>Checkout</h1>

            <div className={styles.formTopRow}>
              <div className={styles.formGroup}>
                <h2>billing details</h2>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <span className={styles.error}>{formErrors.name}</span>
                )}
              </div>
              <div className={`${styles.formGroup} ${styles.formGroupCustom2}`}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <span className={styles.error}>{formErrors.email}</span>
                )}
              </div>
            </div>
            <div className={`${styles.formGroup} ${styles.formGroupCustom3}`}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {formErrors.phoneNumber && (
                <span className={styles.error}>{formErrors.phoneNumber}</span>
              )}
            </div>
            <div className={styles.formGroup}>
              <h3>Shipping info</h3>

              <label htmlFor="address">Your Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {formErrors.address && (
                <span className={styles.error}>{formErrors.address}</span>
              )}
            </div>
            <div className={styles.formTopRow}>
              <div className={styles.formGroup}>
                <label htmlFor="zip">ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                />
                {formErrors.zip && (
                  <span className={styles.error}>{formErrors.zip}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                {formErrors.city && (
                  <span className={styles.error}>{formErrors.city}</span>
                )}
              </div>
            </div>
            <div className={`${styles.formGroup} ${styles.formGroupCustom3}`}>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
              {formErrors.country && (
                <span className={styles.error}>{formErrors.country}</span>
              )}
            </div>
            <div className={styles.formGroup}>
              <h3>Payment Details</h3>
              <label className={styles.eMoneyLabel} htmlFor="paymentMethod">
                Payment Method
              </label>
              <div className={styles.paymentMethodContainer}>
                <div
                  className={`${styles.radioChild} ${
                    formData.paymentMethod === "eMoney" &&
                    styles.radioChildChecked
                  }`}
                  onClick={() =>
                    handleChange({
                      target: { name: "paymentMethod", value: "eMoney" },
                    })
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
                  className={`${styles.radioChild} ${
                    formData.paymentMethod === "cashOnDelivery" &&
                    styles.radioChildChecked
                  }`}
                  onClick={() =>
                    handleChange({
                      target: {
                        name: "paymentMethod",
                        value: "cashOnDelivery",
                      },
                    })
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

            {formData.paymentMethod === "eMoney" && (
              <>
                <div className={styles.eMoneyContainer}>
                  <div className={styles.formGroup}>
                    <label htmlFor="eMoneyNumber">e-Money Number</label>
                    <input
                      type="text"
                      name="eMoneyNumber"
                      value={formData.eMoneyNumber}
                      onChange={handleChange}
                    />
                    {formErrors.eMoneyNumber && (
                      <span className={styles.error}>
                        {formErrors.eMoneyNumber}
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="eMoneyPin">e-Money PIN</label>
                    <input
                      type="text"
                      name="eMoneyPin"
                      value={formData.eMoneyPin}
                      onChange={handleChange}
                    />
                    {formErrors.eMoneyPin && (
                      <span className={styles.error}>
                        {formErrors.eMoneyPin}
                      </span>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

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
                    <span className={styles.checkoutQuantity}>
                      x{item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.summaryDetails}>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Total Cost</span>
                <span className={styles.result}>${totalPrice.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Shipping</span>
                <span className={styles.result}>
                  ${shippingCost.toFixed(2)}
                </span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>VAT (Included)</span>
                <span className={styles.result}>$ 1,079</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.grandTotal}`}>
                <span className={styles.summaryLabel}>Grand Total</span>
                <span className={styles.grandResult}>
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>
            <button className="btn orange" type="submit">
              continue & pay
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className={styles.checkoutModalOverlay}>
          <div className={styles.checkoutModal}>
            <img src={OrangeTick} alt="Order confirmation"></img>
            <h2>Thank you for your order!</h2>
            <p className={styles.emailText}>
              You will receive an email confirmation shortly
            </p>

            <div className={styles.itemsContainer}>
              <div className={styles.rowWrapper}>
                <div className={styles.rowWrapperChild}>
                  <div className={styles.productContainer}>
                    <div className={styles.productWrapper}>
                      <img
                        src={cartItems[0].image.desktop}
                        alt={cartItems[0].name}
                        className={styles.productImage}
                      />

                      <div className={styles.productDetails}>
                        <p className={styles.productName}>
                          {shortenProductName(cartItems[0].name)}
                        </p>
                        <p className={styles.productPrice}>
                          ${cartItems[0].price.toFixed(2)}
                        </p>
                      </div>
                      <p className={styles.productAmount}>
                        x{cartItems[0].quantity}
                      </p>
                    </div>

                    {totalOtherItems > 0 && (
                      <div
                        className={`${styles.otherItems} ${styles.hideOnTablet}`}
                      >
                        and {totalOtherItems} other item
                        {totalOtherItems > 1 ? "s" : ""}
                      </div>
                    )}
                  </div>

                  {cartItems.slice(1).map((item) => (
                    <div
                      key={item.id}
                      className={`${styles.productContainer} ${styles.otherItems}`}
                    >
                      <div className={styles.productWrapper}>
                        <img
                          src={item.image.desktop}
                          alt={item.name}
                          className={styles.productImage}
                        />
                        <div className={styles.productDetails}>
                          <p className={styles.productName}>
                            {shortenProductName(item.name)}
                          </p>
                          <p className={styles.productPrice}>
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <p className={styles.productAmount}>x{item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.rowWrapperChild}>
                  <div className={styles.totalContainer}>
                    <p>
                      <strong>Grand Total:</strong> ${grandTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div onClick={handleBackToHome} className="btn orange homeBtn">
              back to home
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
