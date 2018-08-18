import React, { Component } from 'react';
import { Link, navigate } from 'gatsby';

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
      <article className="card">
        <div
          onClick={() => navigate(`${slug}`)}
          onKeyPress={() => navigate(`${slug}`)}
          role="button"
          tabIndex={0}
        >
          <header className="card__header">
            <h2 className="card__title-custom">
              <span className="card__title-customUnderline">
                <Link
                  className="card__title-link"
                  to={slug}
                  onClick={this.handleChildClick}
                >
                  {title}
                </Link>
              </span>
              {techBlock}
            </h2>
          </header>
          <section className="card__content">
            <p className="card__description">{description}</p>
          </section>
          <footer className="card__footer">
            <Link
              className="card__button"
              to={slug}
              onClick={this.handleChildClick}
            >
              View
            </Link>
          </footer>
        </div>
      </article>
    );
  }
}

export default Project;
