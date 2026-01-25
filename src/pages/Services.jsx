import React from 'react'
import styles from './Services.module.css'

const SERVICES = [
  { title: 'Web Development', desc: 'Modern, responsive front-end and full-stack web applications with React, Node.js, and more.' },
  { title: 'UI / UX', desc: 'Clean, accessible interfaces and user-focused design.' },
  { title: 'API & Backend', desc: 'RESTful APIs, database design, and server-side logic with Node, Express, and MongoDB.' },
]

export default function Services() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <h3 className={styles.subtitle}>WHAT I OFFER</h3>
        <h2 className={styles.title}>Services</h2>
        <ul className={styles.list}>
          {SERVICES.map(({ title, desc }) => (
            <li key={title} className={styles.item}>
              <h4 className={styles.itemTitle}>{title}</h4>
              <p className={styles.itemDesc}>{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
