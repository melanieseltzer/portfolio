import React, { Component } from 'react';
import { Link } from 'gatsby';
import moment from 'moment';

class Post extends Component {
  render() {
    const { data } = this.props;
    const { title, date, category, description } = data.node.frontmatter;
    const { slug, categorySlug } = data.node.fields;

    return (
      <Link className="card__title-link" to={slug}>
        <div className="card">
          <div className="card__meta">
            <time
              className="card__meta-time"
              dateTime={moment(date).format('MMMM D, YYYY')}
            >
              {moment(date).format('MMMM YYYY')}
            </time>
            <span className="card__meta-divider" />
            <span className="card__meta-category" key={categorySlug}>
              <Link to={categorySlug} className="card__meta-category-link">
                {category}
              </Link>
            </span>
          </div>
          <h2 className="card__title">
            <Link className="card__title-link" to={slug}>
              {title}
            </Link>
          </h2>
          <p className="card__description">{description}</p>
          <Link className="card__readmore" to={slug}>
            Read
          </Link>
        </div>
      </Link>
    );
  }
}

export default Post;
