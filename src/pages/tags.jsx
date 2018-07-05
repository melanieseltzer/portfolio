import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class TagsRoute extends Component {
  render() {
    const { data } = this.props;
    const { title, menu } = data.site.siteMetadata;
    const tags = data.allMarkdownRemark.group;

    return (
      <Layout>
        <Helmet>
          <title>All Tags - {title}</title>
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Menu data={menu} />
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="card">
              <h1 className="card__title">All Tags</h1>
              <div className="card__body">
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
        </div>
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
