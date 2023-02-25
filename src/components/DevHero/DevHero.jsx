import React from "react"
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion"
import css from "./DevHero.module.scss"
import { motion } from "framer-motion"

const DevHero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Web
            <br />
            Development
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            Front End Design
            <br />
            Backend End Architecture{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person.png"
            alt=""
          />
        </motion.div>

        <a className={css.email} href="mailto:kevinlenovomail@gmail.com">
          kevinlenovomail@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">4</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Work Experience</div>
            </div>
          </motion.div>

          {/* link to next section */}
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <a href="#experties">
              <button className="toggleSection">Experties</button>{" "}
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>FULL STACK WEB DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default DevHero
