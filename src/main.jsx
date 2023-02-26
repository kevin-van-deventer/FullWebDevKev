import React from "react"
import ReactDOM from "react-dom/client"
// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// seo
// import { Helmet } from "react-helmet"
// pages
import Home from "./Home"
import Developer from "./Developer"
import Contact from "./Contact"
// components

// styles
import "./styles/global.scss"
import "./styles/index.css"

// logs the current URL path

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Switch> */}
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*"></Route>
      </Routes>
    </Router>
    {/* </Switch> */}
  </React.StrictMode>
)
