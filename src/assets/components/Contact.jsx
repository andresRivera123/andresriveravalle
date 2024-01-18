import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
  };

  const [formValues, setFormValues] = useState({
    user__name: "",
    user__email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    return (
      formValues.user__name.trim() !== "" &&
      /\S+@\S+\.\S+/.test(formValues.user__email) &&
      formValues.message.trim() !== ""
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_arfp68i",
          "template_023hyeq",
          form.current,
          "7wymKZGdKfZsX5llp"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message SENT");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Mail Send Successfully",
              showConfirmButton: false,
              timer: 3500,
              customClass: {
                title: "subtitle",
              },
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      Swal.fire({
        title: "Please, fill in all the fields of the form",
        icon: "info",
        customClass: {
          title: "sw__title",
        },
      });
    }
  };

  return (
    <>
      <div className="contact__container">
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="input__label">
            <label className="text">Name</label>
            <input
              className="text"
              type="text"
              name="user__name"
              value={formValues.user__name}
              onChange={handleChange}
            />
          </div>
          <div className="input__label">
            <label className="text">Email</label>
            <input
              className="text"
              type="email"
              name="user__email"
              value={formValues.user__email}
              onChange={handleChange}
            />
          </div>
          <div className="input__label">
            <label className="text">Message</label>
            <textarea
              className="text"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
          </div>
          <input
            className="text  button__submit"
            type="submit"
            value="SEND EMAIL"
            onClick={handleActive}
          />
        </form>
      </div>
    </>
  );
}
