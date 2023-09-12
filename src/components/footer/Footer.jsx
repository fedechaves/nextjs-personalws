import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3>Fede Chaves - 2023.</h3>
        <span style={{fontSize: "9px", display: "flex", flexDirection:"column"}}>
          <a href="https://www.freepik.com/free-vector/design-inspiration-concept-illustration_10791980.htm#query=illustrations&position=2&from_view=keyword&track=sph">Illustrations by storyset on Freepik</a> 
          <a href="https://www.freepik.com/free-vector/solidarity-concept-illustration_14562369.htm#&position=30&from_view=author">Illustrations by storyset on Freepik</a>
        </span>
      </div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Facebook"/>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Instagram"/>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Twitter"/>
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Youtube"/>
      </div>
    </div>
  )
}

export default Footer
