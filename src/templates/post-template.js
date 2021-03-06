import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PostTemplateDetails from '../components/PostTemplateDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class PostTemplate extends Component {
  render() {
    const { data } = this.props;
    const { title, metaDescription } = data.site.siteMetadata;
    const post = data.markdownRemark;
    const { title: postTitle, description: postDescription } = post.frontmatter;
    const description =
      postDescription !== null ? postDescription : metaDescription;

    return (
      <Layout>
        <Helmet>
          <title>{`${postTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Header {...this.props} />
        <section className="row">
          <PostTemplateDetails {...this.props} />
        </section>
        <Footer />
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        metaDescription
        menu {
          label
          path
        }
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
        categorySlug
      }
      frontmatter {
        title
        category
        tags
        date
        description
      }
    }
  }
`;
