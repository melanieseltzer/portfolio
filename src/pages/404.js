import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/layout';

class NotFoundRoute extends Component {
  render() {
    return (
      <Layout>
        <Header {...this.props} />
        <section className="row">
          <section className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">404 NOT FOUND</h1>
                <div className="page__body">
                  <p>You just hit a route that doesn&#39;t exist... 😢</p>
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

export default NotFoundRoute;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        menu {
          label
          path
        }
      }
    }
  }
`;
