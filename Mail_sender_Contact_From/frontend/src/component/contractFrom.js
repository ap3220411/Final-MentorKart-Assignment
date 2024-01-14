import React, { useState } from "react";
import axios from "axios";

import "./contractFrom.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [submitting, setSubmitting] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post("http://localhost:5000/mail/send", {
        receiver: email,
        subject: "Contact Form Submission",
        message,
      });

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    
    } finally {
      setSubmitting(false);
    }
  };

    return (
      <div className=" container">
        <div className="header">
          <div className="text">CONTACT FORM</div>
          <div className="Underline"></div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            {" "}
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Subject
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="send">
        <button type="submit" className="btn btn-primary" onClick={handleSubmit} disabled={submitting}>
          Send
        </button>

        </div>
      </div>
    );
};


export default ContactForm;
