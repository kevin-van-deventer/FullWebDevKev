import React from "react"
import { footerVariants, staggerChildren } from "../../utils/motion"
import css from "./Footer.module.scss"
import { motion } from "framer-motion"
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="tersiaryPrimary">
            Let's make something <br />
            amazing together.
          </span>
          <span className="tersiaryPrimary">
            Start by{" "}
            <a href="mailto:admin@fullwebdevkev.com" rel="no-follow">
              saying hi
            </a>
          </span>
        </div>

        <div className={`${css.right} tersiaryText`}>
          <div className={css.info}>
            <span>Areas</span>
            <p>Siem Reap, Cambodia</p>
            <p>Pretoria, South Africa</p>
            <p>Sydney, Australia</p>
          </div>
        </div>

        <div className={`${css.right} tersiaryText`}>
          <ul className={css.menu}>
            <li>
              <a href="#experties" rel="no-follow">
                Experties
              </a>
            </li>
            <li>
              <a href="#work" rel="no-follow">
                Work
              </a>
            </li>
            <li>
              <a href="#portfolio" rel="no-follow">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#people" rel="no-follow">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Footer
