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
            <h1 className={styles.imgTitle}>Digital Storytellers</h1>
            <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
          </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nihil dolorem. 
            Eos sapiente dignissimos est et nobis provident, corporis tenetur autem sint veritatis 
            repellendus quidem optio ea corrupti numquam quo.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Quae voluptatem, esse iste sunt perspiciatis est ipsum illo 
            ab aut, animi laborum unde dolores rerum corporis praesentium 
            voluptatum hic, pariatur fuga!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nihil dolorem. 
            Eos sapiente dignissimos est et nobis provident, corporis tenetur autem sint veritatis 
            repellendus quidem optio ea corrupti numquam quo.
            <br />
            <br />-Creative Illustrations -Dynamic Websites -Fast and Handy Mobile Apps
          </p>
          <Button url="/contact" text="contact"/>
        </div>
      </div>
    </div>
  )
}

export default About
