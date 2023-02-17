import React from "react"
import { motion } from "framer-motion"
import css from "./Portfolio.module.scss"
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion"
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="tersiaryPrimary">My Latest Works</span>
            <p className="tersiaryText" style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>
          <span className="tersiaryText">Explore More Works</span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./showCase1.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./showCase2.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./showCase3.png"
            alt="project"
          />
        </div>

        <motion.div
          variants={fadeIn("left", "tween", 0.5, 1)}
          className={css.certificate}
        >
          <a href="#people">
            <button className="toggleSection">Testimonials</button>{" "}
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Portfolio
