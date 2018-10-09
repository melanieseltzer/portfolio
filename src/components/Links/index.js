import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faGithubAlt,
  faTwitter,
  faLinkedin,
  faCodepen
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import './style.scss';

library.add(faGithubAlt, faTwitter, faCodepen, faEnvelope, faLinkedin);

class Links extends Component {
  render() {
    const { data } = this.props;
    const author = data;
    const links = {
      twitter: author.twitter,
      github: author.github,
      email: author.email,
      codepen: author.codepen,
      linkedin: author.linkedin
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`https://www.github.com/${links.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubAlt} size="2x" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://codepen.io/${links.codepen}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCodepen} size="2x" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.twitter.com/${links.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.linkedin.com/in/${links.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
