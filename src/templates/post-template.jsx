import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PostTemplateDetails from '../components/PostTemplateDetails';
import Layout from '../components/layout';

class PostTemplate extends Component {
  render() {
    const { data } = this.props;
    const { title, subtitle } = data.site.siteMetadata;
    const post = data.markdownRemark;
    const { title: postTitle, description: postDescription } = post.frontmatter;
    const description = postDescription !== null ? postDescription : subtitle;

    return (
      <Layout>
        <Helmet>
          <title>{`${postTitle} - ${title}`}</title>
          <meta name="description" content={description} />
        </Helmet>
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
