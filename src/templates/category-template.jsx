import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import CategoryTemplateDetails from '../components/CategoryTemplateDetails';
import Layout from '../components/layout';

class CategoryTemplate extends Component {
  render() {
    const { data, pageContext } = this.props;
    const { title } = data.site.siteMetadata;
    const { category } = pageContext;

    return (
      <Layout>
        <Helmet title={`${category} - ${title}`} />
        <Sidebar {...this.props} />
        <CategoryTemplateDetails {...this.props} />
      </Layout>
    );
  }
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
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
          category: { eq: $category }
          layout: { eq: "post" }
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
