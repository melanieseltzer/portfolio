import React, { Component } from 'react';
import get from 'lodash/get';
import { Link } from 'gatsby';
import Links from '../Links';
import profilePic from '../../pages/photo.jpg';
import './style.scss';

class Sidebar extends Component {
  render() {
    const { location, data } = this.props;
    const { author } = data.site.siteMetadata;
    const { meta } = data.site.siteMetadata;

    const isPage = () => {
      if (get(location, 'pathname', '/') === '/') {
        return (
          <React.Fragment>
            <h1 className="sidebar__author-title">{meta.home.heading}</h1>
            <p className="sidebar__author-subtitle">{meta.home.subtitle}</p>
          </React.Fragment>
        );
      }
      if (get(location, 'pathname') === '/projects/') {
        return (
          <React.Fragment>
            <h1 className="sidebar__author-title">{meta.projects.heading}</h1>
            <p className="sidebar__author-subtitle">{meta.projects.subtitle}</p>
          </React.Fragment>
        );
      }
      if (get(location, 'pathname') === '/about/') {
        return (
          <React.Fragment>
            <h1 className="sidebar__author-title">{meta.about.heading}</h1>
            <p className="sidebar__author-subtitle">{meta.about.subtitle}</p>
          </React.Fragment>
        );
      }
      if (get(location, 'pathname') === '/contact/') {
        return (
          <React.Fragment>
            <h1 className="sidebar__author-title">{meta.contact.heading}</h1>
            <p className="sidebar__author-subtitle">{meta.contact.subtitle}</p>
          </React.Fragment>
        );
      }
    };

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <React.Fragment>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="150"
            height="150"
            alt={author.name}
          />
        </Link>
        {isPage()}
      </React.Fragment>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <section className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <React.Fragment>
            <Links data={author} />
          </React.Fragment>
        </div>
      </section>
    );
  }
}

export default Sidebar;
