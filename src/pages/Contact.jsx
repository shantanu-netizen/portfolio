import React, { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const email = 'shantanupratap58@gmail.com'
  const phone = '+91 9528908671'
  const linkedin = 'https://www.linkedin.com/in/shantanu-pratap-singh-webdev/'

  const handleCopyEmail = async () => {
    if (!navigator?.clipboard) {
      return
    }

    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main className={styles.page} id="contact" aria-label="Contact Shantanu">
      <section className={styles.wrapper} aria-labelledby="contact-heading">
        <header>
          <p className={styles.subtitle}>GET IN TOUCH</p>
          <h1 className={styles.title} id="contact-heading">
            Contact
          </h1>
        </header>

        <p className={styles.lead}>
          Have a project in mind or want to collaborate? Reach out—I&apos;d love to hear from you.
        </p>

        <section className={styles.emailBlock} aria-label="Email contact">
          <span className={styles.emailLabel}>Email</span>
          <div className={styles.emailRow}>
            <a href={`mailto:${email}`} className={styles.email}>
              {email}
            </a>
            <button
              type="button"
              className={styles.copyBtn}
              onClick={handleCopyEmail}
              aria-pressed={copied}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </section>

        <section className={styles.extraInfo} aria-label="Additional contact information">
          <p className={styles.extraLine}>
            Phone:{' '}
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className={styles.email}>
              {phone}
            </a>
          </p>
          <p className={styles.extraLine}>
            LinkedIn:{' '}
            <a href={linkedin} target="_blank" rel="noreferrer" className={styles.email}>
              View profile
            </a>
          </p>
        </section>
      </section>
    </main>
  )
}
