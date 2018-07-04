import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import scrollToComponent from 'react-scroll-to-component';
import Project from '../components/Project';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class ProjectsRoute extends Component {
  componentWillUpdate() {
    if (window.innerWidth < 685) {
      scrollToComponent(this.Content, {
        offset: 0,
        align: 'top',
        duration: 400
      });
    }
  }

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
          <title>{title}</title>
          <meta name="description" content={subtitle} />
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Menu data={menu} />
        <Sidebar {...this.props} />
        <div
          className="content"
          ref={section => {
            this.Content = section;
          }}
        >
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
        welcome
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          twitter
          github
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
