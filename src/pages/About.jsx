import React, { useState } from 'react'
import styles from './About.module.css'

const FULL_BIO = `Full Stack Developer Student, Career247. Participated in intensive, job-aligned training programs covering both front-end (HTML, CSS, JavaScript, React) and back-end (Node.js, SQL, MongoDB) technologies with GEN AI. Completed multiple collaborative projects simulating industry scenarios. Developed, deployed, and maintained scalable web applications. Enhanced problem-solving abilities through mentorship and teamwork. Gained expertise in Git version control, RESTful API integration, and database management. Certified in modern development practices and tools.`

const TRUNCATE_LENGTH = 120

const SKILLS = [
  'HTML and CSS',
  'JavaScript',
  'Basic Understanding of DSA',
  'React.js',
  'Node.js',
  'Express.js',
  'DBMS and MongoDB',
  'GitHub',
  'Artificial Intelligence (AI)',
]

export default function About() {
  const [readMore, setReadMore] = useState(false)
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null)

  const displayBio = readMore ? FULL_BIO : `${FULL_BIO.slice(0, TRUNCATE_LENGTH)}...`
  const canExpand = FULL_BIO.length > TRUNCATE_LENGTH

  return (
    <div className={styles.page}>
      <div className={styles.about}>
        <div className={styles.details}>
          <h3 className={styles.subtitle}>MORE ABOUT ME</h3>
          <h2 className={styles.title}>Hi there! I'm Shantanu</h2>
          <p className={styles.bio}>
            {displayBio}
          </p>
          {canExpand && (
            <button
              type="button"
              className={styles.readMoreBtn}
              onClick={() => setReadMore(!readMore)}
              aria-expanded={readMore}
            >
              {readMore ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
        <div className={styles.skills}>
          <h3 className={styles.skillsTitle}>Skills &amp; Technologies</h3>
          <ul className={styles.skillList}>
            {SKILLS.map((skill, index) => (
              <li
                key={skill}
                className={`${styles.skillItem} ${hoveredSkillIndex === index ? styles.skillItemHovered : ''}`}
                onMouseEnter={() => setHoveredSkillIndex(index)}
                onMouseLeave={() => setHoveredSkillIndex(null)}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
