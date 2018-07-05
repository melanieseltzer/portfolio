import React, { Component } from 'react';
import get from 'lodash/get';
import { Link } from 'gatsby';
import Links from '../Links';
import profilePic from '../../pages/photo.jpg';
import './style.scss';

class Sidebar extends Component {
  render() {
    const { location, data } = this.props;
    const { author, copyright } = data.site.siteMetadata;
    const { meta } = data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';
    const isProjectsPage = get(location, 'pathname') === '/projects';
    const isAboutPage = get(location, 'pathname') === '/about';
    const isContactPage = get(location, 'pathname') === '/contact';

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="150"
            height="150"
            alt={author.name}
          />
        </Link>
        {isHomePage ? (
          <div>
            <h1 className="sidebar__author-title">{meta.home.heading}</h1>
            <p className="sidebar__author-subtitle">{meta.home.subtitle}</p>
          </div>
        ) : (
          ''
        )}
        {isProjectsPage ? (
          <div>
            <h1 className="sidebar__author-title">{meta.projects.heading}</h1>
            <p className="sidebar__author-subtitle">{meta.projects.subtitle}</p>
          </div>
        ) : (
          ''
        )}
        {isAboutPage ? (
          <div>
            <h1 className="sidebar__author-title">{meta.about.heading}</h1>
            <p className="sidebar__author-subtitle">{meta.about.subtitle}</p>
          </div>
        ) : (
          ''
        )}
        {isContactPage ? (
          <div>
            <h1 className="sidebar__author-title">{meta.contact.heading}</h1>
            <p className="sidebar__author-subtitle">{meta.contact.subtitle}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            <Links data={author} />
            <p className="sidebar__copyright">{copyright}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
