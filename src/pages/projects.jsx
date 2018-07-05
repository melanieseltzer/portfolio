import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Project from '../components/Project';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class ProjectsRoute extends Component {
  render() {
    const items = [];
    const { data } = this.props;
    const { title, subtitle, menu } = data.site.siteMetadata;
    const projects = data.allMarkdownRemark.edges;
    projects.forEach(project => {
      items.push(<Project data={project} key={project.node.fields.slug} />);
    });

    return (
      <Layout>
        <Helmet>
          <title>Projects - {title}</title>
          <meta name="description" content={subtitle} />
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Menu data={menu} />
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">{items}</div>
        </div>
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
        heading
        subtitle
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
