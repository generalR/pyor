import React from 'react'
import { Link } from 'gatsby'

class Navigation extends React.Component {
  render() {
    return (
      <header className="container" id="header_container_post">
        <div className="logo_wrapper">
          <Link to="/">
            <h3 id="logo">Roy Persson</h3>
          </Link>
        </div>
        <div className="row menu_wrapper">
          <div className="col-xs-4 main_nav_wrapper ">
            <nav id="main_nav">
              <Link to={'/'}>Hem</Link>
              <Link to={'/lab'}>Projekt</Link>
              <Link to={'/cv'}>CV</Link>
            </nav>
          </div>

          <div className="col-xs-offset-4 ">
            <span className="mail_adress">E: roypers89@gmail.com</span> <br />
            <span className="mail_adress">T: +46 735747926</span>
          </div>
        </div>
      </header>
    )
  }
}

export default Navigation
