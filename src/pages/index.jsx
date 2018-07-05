import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Post from '../components/Post';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class IndexRoute extends Component {
  render() {
    const items = [];
    const { data } = this.props;
    const { title, subtitle, menu } = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges;
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

    return (
      <Layout>
        <Helmet>
          <title>Hi! - {title}</title>
          <meta name="description" content={subtitle} />
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <div className="home">
          <Menu data={menu} />
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">{items}</div>
          </div>
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
        heading
        subtitle
        copyright
        menu {
          label
          path
        }
        meta {
          home {
            heading
            subtitle
          }
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
