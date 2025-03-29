import React from "react"

function Nav({ toggleSection }) {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => toggleSection("about")}>About Me</button>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/isaiah-mitchel707/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </li>
        <li>
          <button onClick={() => toggleSection("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
