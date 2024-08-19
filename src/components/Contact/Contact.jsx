import React, { useState, useRef } from "react";
import styles from "./Contact.module.css";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState(""); // State for email validation errors
  const form = useRef();

  // Handles changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate email field on change
    if (name === "email") {
      validateEmail(value);
    }
  };

  // Validates email format
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent form submission if there's an email error
    if (emailError || !formData.email) {
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm("service_x7uctaj", "template_o45o6h8", form.current, {
        publicKey: "JfpAKuW-mDGazL7RP",
      })
      .then(
        () => {
          // console.log("SUCCESS!"); // Log success message
          setMessageSent(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => {
            setIsSubmitting(false);
            setMessageSent(false);
          }, 1000);
        },
        (error) => {
          // console.log("FAILED...", error.text); // Log error message
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <section className={styles.container} id="contact">
        <form className={styles.contactForm} onSubmit={handleSubmit} ref={form}>
          <h2>Contact Us</h2>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Display email validation error */}
            {emailError && <p className={styles.error}>{emailError}</p>}

            <textarea
              id="message"
              name="message"
              rows={10}
              placeholder="Write something.."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <input type="submit" value="Submit" disabled={isSubmitting} />
          </div>
        </form>

        <div className={styles.divider}></div>

        <div className={styles.socialMedia}>
          <h2>Connect With Us</h2>
          <ul>
            <li>
              <FaInstagram />
              <a
                href="https://www.instagram.com/rohit_.pundir/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <FaLinkedinIn />
              <a
                href="https://www.linkedin.com/in/rohit-pundir-21b551285"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <FaGithub />
              <a
                href="https://github.com/RohitPundir98?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <FaTwitter />
              <a
                href="https://twitter.com/RohitPu57642435"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Display message sent confirmation */}
      {messageSent && (
        <small className={styles.messageSent}>
          <i className="fas fa-check-circle" style={{ marginRight: "5px" }}></i>
          Message sent ✓
        </small>
      )}

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          All &copy; reserved. Made with <span>&hearts;</span> By Rohit
        </p>
      </footer>
    </>
  );
};
