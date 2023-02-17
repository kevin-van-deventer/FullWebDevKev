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
            Start by <a href="mailto:kevinlenovomail@gmail.com">saying hi</a>
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
              <a href="#experties">Experties</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#people">Testimonials</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Footer
