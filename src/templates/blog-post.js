import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'

import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    const menuBtn = document.querySelector('.menu-btn')
    console.log(menuBtn)

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <div className="container ">
          <div className="hero_text">
            <h1>Projekt.</h1>
            <ul className="row">
              <li className="col-xs-4">Case</li>
              <li className="col-xs-4">Service</li>
              <li className="col-xs-4">Webbplatsen</li>
            </ul>
          </div>
        </div>

        <section className="post">
          <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
          <div className="container_post_page">
            <div className="card ">
              <h1>{post.frontmatter.title}</h1>
              <h2>{siteDescription}</h2>
              <p style={{ color: 'red' }}>{post.frontmatter.date}</p>
            </div>
            <article className="row center-xs end-md end-lg">
              <div
                className="post_content col-xs-11 col-md-8"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </article>
            <hr style={{}} />
          </div>
        </section>

        <ul style={{}}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            resize(width: 1280, height: 700) {
              src
            }
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
