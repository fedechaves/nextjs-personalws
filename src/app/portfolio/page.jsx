import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';


const Portfolio = () => {
  return (
    <div classname={styles.container}>
      <h1 classname={styles.selectTitle}>Choose a Gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations">
          <span>Illustrations</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
