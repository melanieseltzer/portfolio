import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import TechTemplateDetails from '../components/TechTemplateDetails';
import Layout from '../components/layout';

class TechTemplate extends Component {
  render() {
    const { data, pageContext } = this.props;
    const { title } = data.site.siteMetadata;
    const { tech } = pageContext;

    return (
      <Layout>
        <Helmet title={`Projects made with: "${tech}" - ${title}`} />
        <Header {...this.props} />
        <section className="row">
          <Sidebar {...this.props} />
          <TechTemplateDetails {...this.props} />
        </section>
        <Footer />
      </Layout>
    );
  }
}

export default TechTemplate;

export const pageQuery = graphql`
  query TechnologyPage($tech: String) {
    site {
      siteMetadata {
        title
        menu {
          label
          path
        }
        author {
          name
          email
          twitter
          github
          codepen
          linkedin
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: {
        frontmatter: {
          tech: { in: [$tech] }
          layout: { eq: "project" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
