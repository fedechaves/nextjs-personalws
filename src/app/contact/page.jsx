/* eslint-disable react/no-unescaped-entities */
"use client"
import React, {useRef} from "react";
import styles from "./page.module.css";
import confetti from 'canvas-confetti';
import Image from "next/image";
import emailjs from "@emailjs/browser";
import ContactImage from 'public/ContactImage.png'

// export const metadata = {
//   title: "Fede Chaves Contact Information",
//   description: "This is Contact Page",
// };

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_APP_SERVICE_ID, 
      process.env.NEXT_PUBLIC_APP_TEMPLATE_ID, 
      form.current, 
      process.env.NEXT_PUBLIC_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      confetti()
      e.target.reset()
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Get in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={ContactImage}
            alt="Contact"
            fill={true}
            className={styles.image}
          />
        </div>
        {/* <form ref={form} onClick={sendEmail} className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </form> */}
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type="text" name="name" placeholder="name" className={styles.input} />
          <input type="email" name="email" placeholder="email" className={styles.input}/>
          <textarea
            className={styles.textArea} 
            name="project" 
            placeholder="Project"
            cols="30"
            rows="10" 
          />
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;