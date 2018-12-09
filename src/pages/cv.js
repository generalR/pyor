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
          <div className="row start-sm start-md start-lg hero_text">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 ">
              <h1>CV</h1>
            </div>
          </div>

          <section className="post-list row">
            <article className="lab-post col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="card">
                <div className="card-content">
                  <h1 />
                </div>
              </div>

              <div className="post_content">
                <div className="label-container">
                  <p className="label-1">Erfarenhet</p>
                  <p>
                    <h2>Webplatser</h2>
                    En nya plats att träna på Iden till appen Spot uppkom i
                    samband med en masterkurst på Karlstad universitet vari en
                    uppgift bestod av att utforska och test ett nytt design
                    koncept. Genom tre iterationer undersöker jag om de
                    rekryterade testpersonerna upplever samma problem som jag
                    gjorde. Nämligen att det är svårt och tidskrävande att i en
                    ny stad eller land finna platser att träna på utomhus. Nedan
                    följer en beskrivning av de tre designsprintar med
                    tillhörande metoder för att generera krav.
                  </p>
                  <p className="label-1">Erfarenhet</p>
                  <p>
                    <h2>2conciliate</h2>
                    En nya plats att träna på Iden till appen Spot uppkom i
                    samband med en masterkurst på Karlstad universitet vari en
                    uppgift bestod av att utforska och test ett nytt design
                    koncept. Genom tre iterationer undersöker jag om de
                    rekryterade testpersonerna upplever samma problem som jag
                    gjorde. Nämligen att det är svårt och tidskrävande att i en
                    ny stad eller land finna platser att träna på utomhus. Nedan
                    följer en beskrivning av de tre designsprintar med
                    tillhörande metoder för att generera krav.
                  </p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Cv
