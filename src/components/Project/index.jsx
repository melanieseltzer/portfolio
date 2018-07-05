import React, { Component } from 'react';
import { Link, push } from 'gatsby';

class Project extends Component {
  // If we didn't have this, clicking on the tags
  // would simply go to the parent link
  handleChildClick = e => {
    e.stopPropagation();
  };

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
                <Link
                  to={tag}
                  onClick={this.handleChildClick}
                  className="item-single__tags-list-item-link"
                >
                  {tech[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );

    return (
      <div
        className="card"
        onClick={() => push(`${slug}`)}
        onKeyPress={() => push(`${slug}`)}
        role="button"
        tabIndex={0}
      >
        <h2 className="card__title">
          <Link className="card__title-link" to={slug}>
            {title}
          </Link>
        </h2>
        <p className="card__description">{description}</p>
        <hr />
        {techBlock}
      </div>
    );
  }
}

export default Project;
