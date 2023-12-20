import React, { useState } from "react";
import "./contact.css";
import Slider from "../slider/Slider";
function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    const regExp = /^(?:(?:\+|00)1)?(?:\d{10,12})$/;
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    e.preventDefault();

    // Validation
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Vui lòng nhập tên của bạn.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Vui lòng nhập nội dung cụ thể!";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập địa chỉ email của bạn.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Địa chỉ email không hợp lệ.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thại của bạn.";
    } else if (!regExp.test(formData.phone)) {
      newErrors.phone = "số điện thại không hợp lệ.";
    }
    // Update errors
    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Perform your form submission logic here
      alert("success");
      console.log(formData);
    }
  };
  return (
    <>
      <div className="box-content">
        <div className="wrapper-box container w-75">
          <div className="row">
            <div className="col-md-6">
              <div className="thumbnail h-100">
                <img
                  src="http://cutuananh.devmaster.vn/images/AnhCat/sp2.jpg"
                  alt="anh lien he"
                  className="h-100 w-100 "
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="thumbnail">
                <p>liên hệ với chúng tôi</p>
                <form className="form" id="form">
                  <div className="inputBox">
                    <input
                      type="text"
                      name="username"
                      value={formData.name}
                      onChange={handleInputChange}
                      id="username"
                      required="required"
                    />
                    <span htmlFor="username">Họ tên</span>
                    <label style={{ color: "red" }}>{errors.username}</label>
                  </div>
                  <div className="inputBox">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      id="email"
                      required="required"
                    />

                    <span htmlFor="email">Email</span>
                    <label style={{ color: "red" }}>{errors.email}</label>
                  </div>
                  <div className="inputBox">
                    <input
                      value={formData.phone}
                      onChange={handleInputChange}
                      id="phone"
                      type="text"
                      name="phone"
                      required="required"
                    />
                    <span htmlFor="phone">Số điện thoại</span>
                    <label style={{ color: "red" }}>{errors.phone}</label>
                  </div>
                  <div className="inputBox">
                    <input
                      value={formData.description}
                      onChange={handleInputChange}
                      id="desc"
                      type="text"
                      name="description"
                      required="required"
                    />
                    <span htmlFor="description">Nội dung</span>
                    <label style={{ color: "red" }}>{errors.description}</label>
                  </div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="box-contact__btn"
                  >
                    Gửi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
