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
            Full Stack
            <br />
            Web Developer?
          </motion.span>

          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            All in one solutons provider.
            <br />
            Find out more about FullWedbDevKev.
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./fwbdkev_logo_developer_background_image.png"
            alt=""
          />
        </motion.div>
        {/* link to github or something */}
      </motion.div>
    </section>
  )
}

export default DevHero
