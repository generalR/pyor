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
                <div className="cv-label-container">
                  <p className="label-1">Erfarenhet</p>
                  <div className="cv-description-wrapper">
                    <h2>Frilansande ux-designer och webbutvecklare</h2>
                    <small className="role-description">Webbutvecklare</small>
                    <p>Jag designar och bygger webbplatser med Gatsby JS.</p>

                    <h3>Assistans för dig</h3>
                    <small className="role-description" />
                    <p>
                      Jag arbetar 70% som personlig assistent hos en man med
                      utagerande problematik vid sidan av mina studier.
                    </p>

                    <h2>2Conciliate</h2>
                    <small className="role-description">
                      Roll - Interaktionsdesigner
                    </small>
                    <p>
                      {' '}
                      Jag genomförde en omfattande utvärdering av deras
                      modelleringsverktyg “2c8”. Jag genomförde bland annat
                      användartester och intervjuade användare av
                      modelleringsverktyget, för att kartlägga användbarheten i
                      2c8 modelling tool. Jag stod även för rådgivning av
                      framtida användarcentrerade arbetsmetoder.
                    </p>

                    <h2>Soleil It</h2>
                    <small className="role-description">Webbutvecklare</small>
                    <p>
                      Jag arbetade med HTML & CSS och Javascript. Mitt team
                      arbetade enligt Scrum med tillhörande sprint-leveranser
                      till bland annat Örebro kommun.
                    </p>
                  </div>

                  <div className="cv-description-wrapper">
                    <p className="label-1">Utbildning</p>
                    <p>
                      <h2>Kandidat i informatik</h2>
                      En nya plats att träna på Iden till appen Spot uppkom i
                      samband med en masterkurst på Karlstad universitet vari en
                      uppgift bestod av att utforska och test ett nytt design
                      koncept. Genom tre iterationer undersöker jag om de
                      rekryterade testpersonerna upplever samma problem som jag
                      gjorde. Nämligen att det är svårt och tidskrävande att i
                      en ny stad eller land finna platser att träna på utomhus.
                      Nedan följer en beskrivning av de tre designsprintar med
                      tillhörande metoder för att generera krav.
                    </p>
                  </div>
                  <div className="cv-description-wrapper">
                    <p className="label-1">Verktyg</p>

                    <p>
                      <h2>Test</h2>
                      En nya plats att träna på Iden till appen Spot uppkom i
                      samband med en masterkurst på Karlstad universitet vari en
                      uppgift bestod av att utforska och test ett nytt design
                      koncept. Genom tre iterationer undersöker jag om de
                      rekryterade testpersonerna upplever samma problem som jag
                      gjorde. Nämligen att det är svårt och tidskrävande att i
                      en ny stad eller land finna platser att träna på utomhus.
                      Nedan följer en beskrivning av de tre designsprintar med
                      tillhörande metoder för att generera krav.
                    </p>
                  </div>
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
