import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PageTemplateDetails from '../components/PageTemplateDetails';
import Layout from '../components/layout';

class PageTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { title, subtitle } = data.site.siteMetadata;
    const page = data.markdownRemark;
    const { title: pageTitle, description: pageDescription } = page.frontmatter;
    const description = pageDescription !== null ? pageDescription : subtitle;

    return (
      <Layout>
        <Helmet>
          <title>{`${pageTitle} - ${title}`}</title>
          <meta name="description" content={description} />
        </Helmet>
        <PageTemplateDetails {...this.props} />
      </Layout>
    );
  }
}

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
