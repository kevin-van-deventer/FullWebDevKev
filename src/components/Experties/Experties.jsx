import React from "react"
import { projectExperience, WhatDoIHelp } from "../../utils/data"
import css from "./Experties.module.scss"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js"

const Experties = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="experties"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* left side */}
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={`tersiaryPrimary ${css.exp}`}
                key={i}
              >
                <div style={{ background: exp.bg }} className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <span className="tersiaryText">{exp.projects} Projects</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* right */}
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="tersiaryPrimary">What i've done? </span>
          {WhatDoIHelp.map((paragraph, i) => (
            <span className="tersiaryText" key={i}>
              {paragraph}
            </span>
          ))}

          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="tersiaryPrimary">70+</span>
              <span className="tersiaryText">Projects Completed</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className="tersiaryPrimary">120+</span>
              <span className="tersiaryText">Happy Clients</span>
            </div>
          </div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <a href="#work">
              <button className="toggleSection">Experience</button>{" "}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experties
