import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PostTemplateDetails from '../components/PostTemplateDetails';
import Menu from '../components/Menu';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class PostTemplate extends Component {
  render() {
    const { data } = this.props;
    const { title, subtitle, menu } = data.site.siteMetadata;
    const post = data.markdownRemark;
    const { title: postTitle, description: postDescription } = post.frontmatter;
    const description = postDescription !== null ? postDescription : subtitle;

    return (
      <Layout>
        <Helmet>
          <title>{`${postTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Menu data={menu} />
        <PostTemplateDetails {...this.props} />
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
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          twitter
        }
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date
        description
      }
    }
  }
`;
