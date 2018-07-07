import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class TagsRoute extends Component {
  render() {
    const { data } = this.props;
    const { title } = data.site.siteMetadata;
    const tags = data.allMarkdownRemark.group;

    return (
      <Layout>
        <Helmet>
          <title>All Tags - {title}</title>
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Header {...this.props} />
        <Sidebar {...this.props} />
        <section className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">All Tags</h1>
              <div className="page__body">
                <div className="tags">
                  <ul className="tags__list">
                    {tags.map(tag => (
                      <li key={tag.fieldValue} className="tags__list-item">
                        <Link
                          to={`/tags/${kebabCase(tag.fieldValue)}/`}
                          className="tags__list-item-link"
                        >
                          {tag.fieldValue} ({tag.totalCount})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagsRoute;

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
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
          linkedin
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
