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
            ideas that we want to implement. In some segments of our business,
            they think two or three steps ahead of us.” Mia Pavelić Executive
            Director, Camping Šimuni “They tend to work quite quickly due to
            being a smaller agency that has their resources in one place.” Chloe
            Ravat Marketing Manager, Lufthansa Airlines “Bornfight is extremely
            easy to work with, allowing staff to focus on other work. The team
            accepts changes easily, communicates well, and is flexible in terms
            of their approach.” Bailey Edwards Senior Product Manager,
            UrbanDaddy “The project management was extremely collaborative,
            helpful, and responsive.” Paula Ljulj Sr. Brand Manager, HARTMANN
            GROUP “Working with Bornfight has been reassuring and angst-free,
            qualities that are uncommon in the world of online product
            development.”
          </p>
        </div>
      </Layout>
    )
  }
}

export default Cv
