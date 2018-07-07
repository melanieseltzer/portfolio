import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';
import TagTemplateDetails from '../components/TagTemplateDetails';
import Layout from '../components/layout';

class TagTemplate extends Component {
  render() {
    const { data, pageContext } = this.props;
    const { title, menu } = data.site.siteMetadata;
    const { tag } = pageContext;

    return (
      <Layout>
        <Helmet title={`Posts tagged: "${tag}" - ${title}`} />
        <Menu data={menu} />
        <Sidebar {...this.props} />
        <TagTemplateDetails {...this.props} />
      </Layout>
    );
  }
}

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
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
          codepen
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
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
