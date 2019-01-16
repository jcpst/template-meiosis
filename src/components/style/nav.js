import { h } from 'preact'

export const Nav = props => (
  <div className="w3-bar w3-black">
    <a className="w3-bar-item w3-button" href="#">
      Meiosis Example
    </a>
    <a
      className="w3-bar-item w3-button"
      target="_blank"
      href="http://meiosis.js.org/tutorial/toc.html"
    >
      tutorial
    </a>
    <a
      className="w3-bar-item w3-button"
      target="_blank"
      href="https://github.com/jcpst/template-meiosis"
    >
      source
    </a>
  </div>
)
