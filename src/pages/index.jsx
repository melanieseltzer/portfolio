import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class IndexRoute extends Component {
  render() {
    const items = [];
    const { data } = this.props;
    const { title, metaDescription } = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges;
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

    return (
      <Layout>
        <Helmet>
          <title>Hi! - {title}</title>
          <meta name="description" content={metaDescription} />
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Header {...this.props} />
        <div className="home">
          <Sidebar {...this.props} />
          <section className="content">
            <div className="content__inner">{items}</div>
          </section>
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
        metaDescription
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
          linkedin
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
