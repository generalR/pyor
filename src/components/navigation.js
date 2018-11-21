import React from 'react'
import { Link } from 'gatsby'

class Navigation extends React.Component {
  render() {
    {
      /* Set Initial State Of Menu */
    }

    return (
      <header className="container" id="header_container_post">
        <div className="logo_wrapper">
          <Link to="/">
            <h3 id="logo">Roy Persson</h3>
          </Link>
        </div>

        <div className="menu-btn">
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <div className="row menu_wrapper menu">
          <div className="col-xs-4  ">
            <nav className="menu-nav" id="main_nav">
              <Link className="nav-item" to={'/'}>
                Hem
              </Link>
              <Link className="nav-item" to={'/lab'}>
                Projekt
              </Link>
              <Link className="nav-item" to={'/cv'}>
                CV
              </Link>
            </nav>
          </div>

          <div className="col-xs-offset-4 ">
            <span className="mail_adress">E: roypers89@gmail.com</span> <br />
            <span className="mail_adress">T: +46 735747926</span>
          </div>
        </div>

        <div id="myNav" class="overlay">
          <div class="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <span className="navbutton">open</span>
      </header>
    )
  }
}

export default Navigation
