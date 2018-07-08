import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class TechRoute extends Component {
  render() {
    const { data } = this.props;
    const { title } = data.site.siteMetadata;
    const technologies = data.allMarkdownRemark.group;

    return (
      <Layout>
        <Helmet>
          <title>All Tech - {title}</title>
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Header {...this.props} />

        <section className="row">
          <Sidebar {...this.props} />
          <section className="content">
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
          </section>
        </section>
        <Footer />
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
