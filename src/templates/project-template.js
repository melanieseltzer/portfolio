import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import ProjectTemplateDetails from '../components/ProjectTemplateDetails';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class ProjectTemplate extends Component {
  render() {
    const { data } = this.props;
    const { title, metaDescription } = data.site.siteMetadata;
    const project = data.markdownRemark;
    const {
      title: projectTitle,
      description: projectDescription
    } = project.frontmatter;
    const description =
      projectDescription !== null ? projectDescription : metaDescription;

    return (
      <Layout>
        <Helmet>
          <title>{`${projectTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Header {...this.props} />
        <section className="row">
          <ProjectTemplateDetails {...this.props} />
        </section>
        <Footer />
      </Layout>
    );
  }
}

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
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
        techSlugs
      }
      frontmatter {
        title
        date
        tech
        description
        repo
      }
    }
  }
`;
