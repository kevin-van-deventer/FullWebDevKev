import React from "react"
import { workExp } from "../../utils/data"
import css from "./Work.module.scss"
import { motion } from "framer-motion"
import {
  fadeIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion"

const Work = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="work"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* heading */}
        <span className="primaryText yPaddings">My Work Experience</span>

        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <motion.div
                variants={textVariant2}
                key={i}
                className={`flexCenter ${css.exp}`}
              >
                <div className={css.post}>
                  <h2>{exp.place}</h2>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h3>{exp.role}</h3>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            )
          })}

          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className={css.line}
            ></motion.div>
            <div>
              <div
                className={css.circle}
                style={{ background: "rgb(5 244 141)" }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "rgb(0 193 245)" }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "rgb(237 29 78)" }}
              ></div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <a href="#portfolio" rel="no-follow">
              <button className="toggleSection">Full Web Dev Kev Work</button>{" "}
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
