import { useState } from "react"

const useFormValidation = (formData) => {
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
  
    return { formErrors, validateForm };
  };

export default useFormValidation
