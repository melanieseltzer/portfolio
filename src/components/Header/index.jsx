import React, { Component } from 'react';
import Menu from '../Menu';
import './style.scss';

class Header extends Component {
  render() {
    const { data } = this.props;
    const { menu } = data.site.siteMetadata;

    return (
      <header className="header">
        <Menu data={menu} />
      </header>
    );
  }
}

export default Header;
