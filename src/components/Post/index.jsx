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
      <div
        className="card"
        onClick={() => push(`${slug}`)}
        onKeyPress={() => push(`${slug}`)}
        role="button"
        tabIndex={0}
      >
        <div className="card__topContainer">
          <h2 className="card__title-custom">
            <Link
              className="card__title-link"
              to={slug}
              onClick={this.handleChildClick}
            >
              {title}
            </Link>
          </h2>
          <div className="card__meta">
            <time
              className="card__meta-time"
              dateTime={moment(date).format('MMMM D, YYYY')}
            >
              {moment(date).format('MMMM YYYY')}
            </time>
            <span className="card__meta-divider" />
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
          <p className="card__description">{description}</p>
        </div>
        <div className="card__bottomContainer">
          <Link
            className="card__button"
            to={slug}
            onClick={this.handleChildClick}
          >
            Read
          </Link>
        </div>
      </div>
    );
  }
}

export default Post;
