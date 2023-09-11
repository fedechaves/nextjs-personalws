/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Hi, I'm Fede Chaves.</h1>
        <h2 className={styles.title2}>Your next Web Developer.</h2>
        <p className={styles.description}>
        I'm a Software Developer from Paraguay with a 3 years of experience in Web Development and a decade of experience in Product and Brand Management. 
        Looking forward to work in challenging problems and learn new technologies. 
        </p>
        <Button url="/portfolio" text="Check My Work"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Hero" className={styles.img}/>
      </div>
    </div>
  )
}
