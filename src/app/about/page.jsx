/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="image" 
          fill={true}
          className={styles.img}
          />
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>About Me</h1>
            <h5 className={styles.imgDesc}>Passionate Full-Stack developer, <br></br>I create beautiful web apps that suits the needs of my clients,<br></br> love to collab with OSS and non-profits</h5>
          </div>
      </div>
      <h1 style={{ textAlign:"center",fontSize:"52px", marginTop:"1rem"}}>What I do:</h1>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Web Development 💻</h1>
          <p className={styles.desc}>
          From developing a simple single static page of plain text to complex web applications, 
          I focus on the methodologies, techniques, and tools needed to make responsive and accessible products
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Business Strategy 💹</h1>
          <p className={styles.desc}>
          With your business's goals in mind, I build web applications using strategic web development (like search engine optimization). 
          The plan is to target ideal clients for your highest priority services, enhance user experience (UX), and increase your online presence
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>UI/UX Design 🖌️</h1> 
          <p className={styles.desc}>
          Customized approach to all design decisions so that your web page offers a pleasant and unique experience for 
          the target audience and is easy to navigate
          </p>
        </div>
      </div>
      <div style={{ display:"grid", placeItems: "center", marginTop: "3rem"}}>
        <Button url="/contact" text="Contact me 😃"/>
      </div>
    </div>
  )
}

export default About
