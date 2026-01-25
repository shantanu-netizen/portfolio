import React, { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const email = 'shantanupratap58@gmail.com'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <h3 className={styles.subtitle}>GET IN TOUCH</h3>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.lead}>
          Have a project in mind or want to collaborate? Reach out—I&apos;d love to hear from you.
        </p>
        <div className={styles.emailBlock}>
          <span className={styles.emailLabel}>Email</span>
          <div className={styles.emailRow}>
            <code className={styles.email}>{email}</code>
            <button
              type="button"
              className={styles.copyBtn}
              onClick={handleCopyEmail}
              aria-pressed={copied}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
