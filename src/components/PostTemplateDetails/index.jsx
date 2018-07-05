import React, { Component } from 'react';
import { Link } from 'gatsby';
import moment from 'moment';

class PostTemplateDetails extends Component {
  render() {
    const { data } = this.props;
    const { subtitle, author } = data.site.siteMetadata;
    const post = data.markdownRemark;
    const tags = post.fields.tagSlugs;

    const tagsBlock = (
      <div className="item-single__tags">
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
      <div>
        <div className="item-single">
          <div className="item-single__inner">
            <h1 className="item-single__title">{post.frontmatter.title}</h1>
            <div
              className="item-single__body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="item-single__date">
              <em>
                Published {moment(post.frontmatter.date).format('D MMM YYYY')}
              </em>
            </div>
          </div>
          <div className="item-single__footer">
            {tagsBlock}
            <hr />
            <p className="item-single__footer-text">
              {subtitle}
              <a
                href={`https://twitter.com/${author.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br /> <strong>{author.name}</strong> on Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostTemplateDetails;
