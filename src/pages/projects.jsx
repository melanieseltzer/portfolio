import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Project from '../components/Project';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class ProjectsRoute extends Component {
  render() {
    const items = [];
    const { data } = this.props;
    const { title, metaDescription } = data.site.siteMetadata;
    const projects = data.allMarkdownRemark.edges;
    projects.forEach(project => {
      items.push(<Project data={project} key={project.node.fields.slug} />);
    });

    return (
      <Layout>
        <Helmet>
          <title>Projects - {title}</title>
          <meta name="description" content={metaDescription} />
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Header {...this.props} />
        <Sidebar {...this.props} />
        <section className="content">
          <div className="content__inner">{items}</div>
        </section>
      </Layout>
    );
  }
}

export default ProjectsRoute;

export const pageQuery = graphql`
  query ProjectQuery {
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
          projects {
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
      filter: {
        frontmatter: { layout: { eq: "project" }, draft: { ne: true } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
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
    }
  }
`;
