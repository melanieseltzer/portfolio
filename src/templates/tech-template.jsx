import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
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
        <Helmet title={`Tech: "${tech}" - ${title}`} />
        <Sidebar {...this.props} />
        <TechTemplateDetails {...this.props} />
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
        welcome
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          twitter
          github
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
