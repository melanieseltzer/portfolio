import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { data } = this.props;
    const { title, subtitle } = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges;
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

    return (
      <Layout>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">{items}</div>
        </div>
      </Layout>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
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
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
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
