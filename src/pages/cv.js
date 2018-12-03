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
          <p>
            “We highly value their continuous need to improve and innovate.”
            Daniela Lepeš Head of Marketing & PR, Adriatic Luxury Hotels “The
            Bornfight team actively participates in our company development and
            ideas that we want to implement.
          </p>
        </div>
      </Layout>
    )
  }
}

export default Cv
