import React from "react"
import { Helmet } from "react-helmet-async"

import Header from "./components/Header/Header"
import DevHero from "./components/DevHero/DevHero"
import InfoCards from "./components/InfoCards/InfoCards"
import Bio from "./components/Bio/Bio"

import Footer from "./components/Footer/Footer"

// import People from "./components/People/People"
// import Portfolio from "./components/Portfolio/Portfolio"
// import Work from "./components/Work/Work"
import css from "./styles/App.module.scss"

const Developer = () => {
  //don't forget to add font link in index.html
  return (
    <>
      <Helmet>
        <title>Developer | About Full Stack Web Developer</title>
        <meta name="description" content="Fullwebdevkev developer page" />
        <link rel="canonical" href="/developer" />
      </Helmet>
      <div className={`bg-primary ${css.container}`}>
        <Header />
        <DevHero />
        <InfoCards />
        <Bio />
        <Footer />
      </div>
    </>
  )
}

export default Developer
