import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';

class NotFoundRoute extends Component {
  render() {
    const { data } = this.props;
    const { menu } = data.site.siteMetadata;

    return (
      <Layout>
        <Menu data={menu} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">404 NOT FOUND</h1>
              <div className="page__body">
                <p>You just hit a route that doesn&#39;t exist... 😢</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NotFoundRoute;

export const pageQuery = graphql`
  query NotFoundQuery {
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
          codepen
        }
      }
    }
  }
`;
