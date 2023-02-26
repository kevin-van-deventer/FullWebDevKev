import React from "react"

import Header from "./components/Header/Header"
import DevHero from "./components/DevHero/DevHero"
import Experties from "./components/Experties/Experties"

import Footer from "./components/Footer/Footer"

// import People from "./components/People/People"
// import Portfolio from "./components/Portfolio/Portfolio"
// import Work from "./components/Work/Work"
import css from "./styles/App.module.scss"

const Developer = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />

      <DevHero />
      <Experties />
      {/* <Work />
      <Portfolio />
      <People /> */}
      <Footer />
    </div>
  )
}

export default Developer
