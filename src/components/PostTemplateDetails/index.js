import React, { Component } from 'react';
import { Link } from 'gatsby';
import moment from 'moment';

class PostTemplateDetails extends Component {
  render() {
    const { data } = this.props;
    const post = data.markdownRemark;
    const tags = post.fields.tagSlugs;
    const category = post.fields.categorySlug;

    const homeBlock = (
      <React.Fragment>
        <Link className="item-single__home-button" to="/">
          All Posts
        </Link>
      </React.Fragment>
    );

    const tagsBlock = (
      <div className="item-single__tags">
        Tagged:
        <ul className="item-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="item-single__tags-list-item" key={tag}>
                <Link to={tag} className="item-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );

    return (
      <React.Fragment>
        <section className="item-single">
          <div className="item-single__inner">
            {homeBlock}
            <h1 className="item-single__title">{post.frontmatter.title}</h1>
            <div className="item-single__date">
              <em>
                Published {moment(post.frontmatter.date).format('D MMM YYYY')} -
                in{' '}
                <span className="card__meta-category" key={category}>
                  <Link to={category} className="card__meta-category-link">
                    {post.frontmatter.category}
                  </Link>
                </span>
              </em>
            </div>
            <div
              className="item-single__body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
          <div className="item-single__footer">
            <hr />
            {tagsBlock}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PostTemplateDetails;
