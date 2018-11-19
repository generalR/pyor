import React from 'react'
import Layout from '../components/layout'
// Import typefaces
//import 'typeface-montserrat'
//import 'typeface-merriweather'

class Cv extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="container">
          <h1>CV sidan</h1>
          <p>En presentation ska in här</p>
        </div>
      </Layout>
    )
  }
}

export default Cv
