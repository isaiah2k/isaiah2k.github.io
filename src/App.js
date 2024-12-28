import React, { useState } from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import About from "./components/About"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"
import "./styles.css"
function App() {
  const [activeSection, setActiveSection] = useState(null)

  const toggleSection = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section))
  }

  return (
    <div>
      <Header />
      <Nav toggleSection={toggleSection} />
      <main>
        {activeSection === "about" && <About />}
        {activeSection === "contact" && <Contact />}
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

export default App
