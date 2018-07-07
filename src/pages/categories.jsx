import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import Favicon from '../assets/favicon.png';

class CategoriesRoute extends Component {
  render() {
    const { data } = this.props;
    const { title, menu } = data.site.siteMetadata;
    const categories = data.allMarkdownRemark.group;

    return (
      <Layout>
        <Helmet>
          <title>All Categories - {title}</title>
          <link key="icon" rel="icon" href={Favicon} />
        </Helmet>
        <Menu data={menu} />
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">Categories</h1>
              <div className="page__body">
                <div className="categories">
                  <ul className="categories__list">
                    {categories.map(category => (
                      <li
                        key={category.fieldValue}
                        className="categories__list-item"
                      >
                        <Link
                          to={`/categories/${kebabCase(category.fieldValue)}/`}
                          className="categories__list-item-link"
                        >
                          {category.fieldValue} ({category.totalCount})
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

export default CategoriesRoute;

export const pageQuery = graphql`
  query CategoryesQuery {
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
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
