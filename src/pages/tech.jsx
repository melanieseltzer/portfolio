import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import scrollToComponent from 'react-scroll-to-component';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class TechRoute extends Component {
  componentWillUpdate() {
    if (window.innerWidth < 685) {
      scrollToComponent(this.Content, {
        offset: -50,
        align: 'top',
        duration: 400
      });
    }
  }

  render() {
    const { data } = this.props;
    const { title, menu } = data.site.siteMetadata;
    const technologies = data.allMarkdownRemark.group;

    return (
      <Layout>
        <Helmet>
          <title>All Tech - {title}</title>
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
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">All Tech</h1>
              <div className="page__body">
                <div className="tags">
                  <ul className="tags__list">
                    {technologies.map(tech => (
                      <li key={tech.fieldValue} className="tags__list-item">
                        <Link
                          to={`/tech/${kebabCase(tech.fieldValue)}/`}
                          className="tags__list-item-link"
                        >
                          {tech.fieldValue} ({tech.totalCount})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default TechRoute;

export const pageQuery = graphql`
  query TechQuery {
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
      limit: 2000
      filter: {
        frontmatter: { layout: { eq: "project" }, draft: { ne: true } }
      }
    ) {
      group(field: frontmatter___tech) {
        fieldValue
        totalCount
      }
    }
  }
`;
