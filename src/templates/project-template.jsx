import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import ProjectTemplateDetails from '../components/ProjectTemplateDetails';
import Menu from '../components/Menu';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class ProjectTemplate extends Component {
  render() {
    const { data } = this.props;
    const { title, subtitle, menu } = data.site.siteMetadata;
    const project = data.markdownRemark;
    const {
      title: projectTitle,
      description: projectDescription
    } = project.frontmatter;
    const description =
      projectDescription !== null ? projectDescription : subtitle;

    return (
      <Layout>
        <Helmet>
          <title>{`${projectTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Menu data={menu} />
        <ProjectTemplateDetails {...this.props} />
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
