import React, { Component } from 'react';
import { Link, push } from 'gatsby';
import moment from 'moment';

class Post extends Component {
  // If we didn't have this, clicking on the tags
  // would simply go to the parent link
  handleChildClick = e => {
    e.stopPropagation();
  };

  render() {
    const { data } = this.props;
    const { title, date, category, description } = data.node.frontmatter;
    const { slug, categorySlug } = data.node.fields;

    return (
      <article className="card">
        <div
          onClick={() => push(`${slug}`)}
          onKeyPress={() => push(`${slug}`)}
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
            </h2>
            <div className="card__meta">
              <time
                className="card__meta-time"
                dateTime={moment(date).format('MMMM D, YYYY')}
              >
                {moment(date).format('MMMM YYYY')}
              </time>
              - in{' '}
              <span className="card__meta-category" key={categorySlug}>
                <Link
                  to={categorySlug}
                  onClick={this.handleChildClick}
                  className="card__meta-category-link"
                >
                  {category}
                </Link>
              </span>
            </div>
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
              Read
            </Link>
          </footer>
        </div>
      </article>
    );
  }
}

export default Post;
