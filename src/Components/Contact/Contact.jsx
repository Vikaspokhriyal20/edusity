import React from 'react'
import './Contact.css'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d2f0f11a-d8df-4406-a45d-6ca12ba521a0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us message <i class="fa-solid fa-envelope"></i> </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback , questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li><i class="fa-solid fa-phone-volume"></i> +91 9698874525</li>
          <li><i class="fa-solid fa-square-envelope"></i> contact@vikas.dev</li>
          <li><i class="fa-solid fa-location-dot"></i> sector - 75 phase-8 Mohali , (Punjab) </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} >
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required />
          <label>Write your message here</label>
          <textarea name="message" rows='4' placeholder='Enter your message'></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
