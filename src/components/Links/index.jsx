import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import faGithubAlt from '@fortawesome/fontawesome-free-brands/faGithubAlt';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faCodepen from '@fortawesome/fontawesome-free-brands/faCodepen';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import './style.scss';

fontawesome.library.add(
  faGithubAlt,
  faTwitter,
  faCodepen,
  faEnvelope,
  faLinkedin
);

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
              <i className="fab fa-github-alt" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://codepen.io/${links.codepen}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.twitter.com/${links.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.linkedin.com/in/${links.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="far fa-envelope" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
