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
            href="https://soundcloud.com/beatsbyzayy?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
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