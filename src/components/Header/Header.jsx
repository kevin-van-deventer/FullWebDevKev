import React, { useEffect, useRef, useState } from "react"

// import react Link
import { Link } from "react-router-dom"

import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi"
import { motion } from "framer-motion"
import { getMenuStyles, headerVariants } from "../../utils/motion"
import useOutsideAlerter from "../../hooks/useOutsideAlerter"
import useHeaderShadow from "../../hooks/useHeaderShadow"
// styles
import css from "./Header.module.scss"
import { useLocation } from "react-router-dom"

const Header = () => {
  const menuRef = useRef(null)
  const [menuOpened, setMenuOpened] = useState(false)
  const headerShadow = useHeaderShadow()
  const loca = useLocation()
  // console.log(loca.pathname)

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
    loca,
  })

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary  ${css.wrapper}`}
      // paddings
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div>
          <a href="/" alt="Go to Full Stack Web Development Kevin Home page">
            <img
              src="./android-chrome-192x192.png"
              alt="full stack web developer kevin portfolio logo"
              id="fullWebDevKevLogo"
            />
          </a>
        </div>
        {/* <div className={css.name}>Kevin</div> */}
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <Link
              to="/developer"
              className={`${loca} === "/developer" ? "active-page" : ""`}
            >
              Developer
            </Link>
          </li>

          {/* {loca === "/developer" ? (
            <li className="active-page">
              <Link to="/developer">Developer</Link>
            </li>
          ) : (
            <li>
              <Link to="/developer">Developer</Link>
            </li>
          )} */}

          {loca === "/contact" ? (
            <li className="active-page">
              <Link to="/contact">Contact</Link>
            </li>
          ) : (
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          )}

          {/* {loca === "/developer" ? (
            <li className="active-page">
              <Link to="/developer">Developer</Link>
            </li>
          ) : (
            <li>
              <Link to="/developer" className="active-page">
                Developer
              </Link>
            </li>
          )} */}
          {/* <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li> */}
          <li className={`flexCenter ${css.phone}`}>
            <p>(+855) 96 264 4430</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={40} />
        </div>
      </div>
    </motion.div>
  )
}

export default Header
