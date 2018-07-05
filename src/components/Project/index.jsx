import React, { Component } from 'react';
import { Link } from 'gatsby';

class Project extends Component {
  render() {
    const { data } = this.props;
    const { title, description, tech } = data.node.frontmatter;
    const { slug, techSlugs } = data.node.fields;

    const techBlock = (
      <div className="item-single__tags">
        <ul className="item-single__tags-list">
          {techSlugs &&
            techSlugs.map((tag, i) => (
              <li className="item-single__tags-list-item" key={tag}>
                <Link to={tag} className="item-single__tags-list-item-link">
                  {tech[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );

    return (
      <Link className="card__title-link" to={slug}>
        <div className="card">
          <h2 className="card__title">
            <Link className="card__title-link" to={slug}>
              {title}
            </Link>
          </h2>
          <p className="card__description">{description}</p>
          <hr />
          {techBlock}
        </div>
      </Link>
    );
  }
}

export default Project;
