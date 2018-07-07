import React, { Component } from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <div className="layout">
          <Helmet defaultTitle="Melanie Seltzer" />
          {children}
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
