import React, { useState, useEffect } from 'react'
import styles from './Home1.module.css'
import Photo from '../assets/Photo.jpeg'

export default function Home() {
  const [showGreeting, setShowGreeting] = useState(false)
  const [isPhotoHovered, setIsPhotoHovered] = useState(false)

  const handleSayHello = () => {
    setShowGreeting(true)
  }

  useEffect(() => {
    if (!showGreeting) return
    const timer = setTimeout(() => setShowGreeting(false), 4000)
    return () => clearTimeout(timer)
  }, [showGreeting])

  const greetingMessage = showGreeting
    ? "Thanks for stopping by! Feel free to reach out anytime."
    : ""

  return (
    <div className={styles.page}>
      <div className={styles.profile}>
        <div className={styles.content}>
          <h1 className={styles.tagline}>
            I design and develop products that create meaningful,
             real-world impact.
          </h1>
          <h2 className={styles.name}>Hello, I'm<br />Shantanu Pratap</h2>

          {showGreeting && (
            <p className={styles.greeting} role="status">
              {greetingMessage}
            </p>
          )}

          <button
            className={styles.cta}
            onClick={handleSayHello}
            aria-pressed={showGreeting}
          >
            Say Hello!
          </button>
        </div>
        <div
          className={`${styles.photo} ${isPhotoHovered ? styles.photoHover : ''}`}
          onMouseEnter={() => setIsPhotoHovered(true)}
          onMouseLeave={() => setIsPhotoHovered(false)}
        >
          <img src={Photo} alt="Shantanu Pratap" />
        </div>
      </div>
    </div>
  )
}
