import React, { useState } from 'react'
import styles from './About.module.css'

/* -----------------------------------------------------------------------------
   Constants
   ----------------------------------------------------------------------------- */
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

/* -----------------------------------------------------------------------------
   About Page
   ----------------------------------------------------------------------------- */
export default function About() {
  const [readMore, setReadMore] = useState(false)
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null)

  const displayBio = readMore ? FULL_BIO : `${FULL_BIO.slice(0, TRUNCATE_LENGTH)}...`
  const canExpand = FULL_BIO.length > TRUNCATE_LENGTH

  return (
    <main className={styles.page} id="about" aria-label="About me">
      <section className={styles.about} aria-labelledby="about-heading">
        <header className={styles.aboutHeader}>
          <p className={styles.subtitle} id="about-heading">
            MORE ABOUT ME
          </p>
          <h1 className={styles.title}>Hi there! I'm Shantanu</h1>
        </header>

        <article className={styles.details}>
          <p className={styles.bio} id="about-bio">{displayBio}</p>
          {canExpand && (
            <button
              type="button"
              className={styles.readMoreBtn}
              onClick={() => setReadMore(!readMore)}
              aria-expanded={readMore}
              aria-controls="about-bio"
            >
              {readMore ? 'Show less' : 'Read more'}
            </button>
          )}
        </article>

        <section className={styles.skills} aria-labelledby="skills-heading">
          <h2 className={styles.skillsTitle} id="skills-heading">
            Skills &amp; Technologies
          </h2>
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
        </section>
      </section>
    </main>
  )
}
