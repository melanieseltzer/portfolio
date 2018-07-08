import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PageTemplateDetails from '../components/PageTemplateDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class PageTemplate extends Component {
  render() {
    const { data } = this.props;
    const { title, metaDescription } = data.site.siteMetadata;
    const page = data.markdownRemark;
    const { title: pageTitle, description: pageDescription } = page.frontmatter;
    const description =
      pageDescription !== null ? pageDescription : metaDescription;

    return (
      <Layout>
        <Helmet>
          <title>{`${pageTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Header {...this.props} />
        <section className="row">
          <PageTemplateDetails {...this.props} />
        </section>
        <Footer />
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
        metaDescription
        meta {
          about {
            heading
            subtitle
          }
          contact {
            heading
            subtitle
          }
        }
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
          linkedin
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
