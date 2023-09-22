"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const Navbar = () => {
    const links = [
        {
          id: 1,
          title: "Home",
          url: "/",
        },
        {
          id: 2,
          title: "Portfolio",
          url: "/portfolio",
        },
        {
          id: 3,
          title: "Blog",
          url: "/blog",
        },
        {
          id: 4,
          title: "About",
          url: "/about",
        },
        {
          id: 5,
          title: "Contact",
          url: "/contact",
        },
        
      ];  
  return (
    <header className={styles.container}>
        <Link href="/" className={styles.logo}>Home</Link>
        <div className={styles.links}>
          <DarkModeToggle/>
          {links.map((link) => (
              <Link className={styles.link} key={link.id} href={link.url}>
                {link.title}
              </Link>
          ))}
          
        </div>
    </header>

  )
}

export default Navbar
